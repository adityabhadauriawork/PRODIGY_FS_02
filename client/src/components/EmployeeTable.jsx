import { Pencil, Trash2, Plus } from "lucide-react";
import { deleteEmployee } from "../services/api";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function EmployeeTable({
  employees = [],
  loading,
  refresh,
}) {
  const removeEmployee = async (id) => {
    if (!window.confirm("Delete employee?")) return;

    try {
      await deleteEmployee(id);

      refresh();
    } catch (err) {
      console.log(err);
      alert("Unable to delete employee.");
    }
  };

  if (loading) {
    return (
      <div className="rounded-3xl bg-slate-900 p-10 text-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800 bg-[#0B1120] shadow-[0_0_40px_rgba(37,99,235,.12)]">

      <div className="flex items-center justify-between border-b border-slate-800 px-8 py-6">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Employee Records
          </h2>

          <p className="mt-1 text-slate-400">
            Manage all employees from one place
          </p>
        </div>

        <Link to="/add-employee">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-semibold text-white"
          >
            <Plus size={20} />
            Add Employee
          </motion.button>
        </Link>

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b border-slate-800 bg-slate-950">

            <th className="px-8 py-5 text-left text-slate-400">
              Employee
            </th>

            <th className="text-left text-slate-400">
              Department
            </th>

            <th className="text-left text-slate-400">
              Position
            </th>

            <th className="text-left text-slate-400">
              Salary
            </th>

            <th className="text-left text-slate-400">
              Status
            </th>

            <th className="text-center text-slate-400">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {employees.length === 0 ? (
            <tr>

              <td
                colSpan="6"
                className="py-10 text-center text-slate-400"
              >
                No Employees Found
              </td>

            </tr>
          ) : (
            employees.map((emp) => (
              <tr
                key={emp._id}
                className="border-b border-slate-800 hover:bg-slate-800/40"
              >

                <td className="px-8 py-5">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 font-bold text-white">

                      {emp.name.charAt(0)}

                    </div>

                    <div>

                      <h3 className="font-semibold text-white">

                        {emp.name}

                      </h3>

                      <p className="text-sm text-slate-400">

                        {emp.employeeId}

                      </p>

                    </div>

                  </div>

                </td>

                <td className="text-slate-300">

                  {emp.department}

                </td>

                <td className="text-slate-300">

                  {emp.position}

                </td>

                <td className="font-semibold text-emerald-400">

                  ₹{emp.salary}

                </td>

                <td>

                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-400">

                    Active

                  </span>

                </td>

                <td>

                  <div className="flex justify-center gap-3">

                    <Link
                      to={`/edit/${emp._id}`}
                      className="rounded-xl bg-blue-600/20 p-3 text-blue-400 hover:bg-blue-600 hover:text-white"
                    >
                      <Pencil size={18} />
                    </Link>

                    <button
                      onClick={() => removeEmployee(emp._id)}
                      className="rounded-xl bg-red-600/20 p-3 text-red-400 hover:bg-red-600 hover:text-white"
                    >
                      <Trash2 size={18} />
                    </button>

                  </div>

                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}