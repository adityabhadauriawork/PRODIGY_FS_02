import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import { motion } from "framer-motion";
import { getEmployee, updateEmployee } from "../services/api";

export default function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    employeeId: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    position: "",
    salary: "",
    joiningDate: "",
    status: "Active",
  });

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    try {
      const res = await getEmployee(id);

      const employee = res.data.employee;

      setForm({
        employeeId: employee.employeeId || "",
        name: employee.name || "",
        email: employee.email || "",
        phone: employee.phone || "",
        department: employee.department || "",
        position: employee.position || "",
        salary: employee.salary || "",
        joiningDate: employee.joiningDate
          ? employee.joiningDate.substring(0, 10)
          : "",
        status: employee.status || "Active",
      });
    } catch (err) {
      console.error(err);
      alert("Unable to load employee.");
    } finally {
      setLoading(false);
    }
  };

  const changeHandler = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);

      await updateEmployee(id, {
        ...form,
        salary: Number(form.salary),
      });

      alert("Employee Updated Successfully");
      navigate("/employees");
    } catch (err) {
      console.error(err);
      alert(
        err?.response?.data?.message ||
          "Unable to update employee."
      );
    } finally {
      setSaving(false);
    }
  };

  const input =
    "w-full rounded-2xl bg-slate-900 border border-slate-700 px-4 py-3 text-white outline-none transition duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

  if (loading) {
    return (
      <div className="min-h-screen bg-[#060B16] flex items-center justify-center text-white text-xl">
        Loading Employee...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060B16] p-8">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-300 hover:text-white"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <h1 className="text-4xl font-bold text-white">
            Edit Employee
          </h1>
        </div>

        <form
          onSubmit={submitHandler}
          className="rounded-[28px] border border-slate-800 bg-slate-900/50 backdrop-blur-xl p-8 shadow-[0_0_40px_rgba(59,130,246,.18)]"
        >
          <div className="grid lg:grid-cols-2 gap-6">

            <div>
              <label className="block text-slate-300 mb-2">Employee ID</label>
              <input
                className={input}
                name="employeeId"
                value={form.employeeId}
                onChange={changeHandler}
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2">Full Name</label>
              <input
                className={input}
                name="name"
                value={form.name}
                onChange={changeHandler}
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2">Email</label>
              <input
                className={input}
                type="email"
                name="email"
                value={form.email}
                onChange={changeHandler}
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2">Phone</label>
              <input
                className={input}
                name="phone"
                value={form.phone}
                onChange={changeHandler}
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2">Department</label>
              <input
                className={input}
                name="department"
                value={form.department}
                onChange={changeHandler}
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2">Position</label>
              <input
                className={input}
                name="position"
                value={form.position}
                onChange={changeHandler}
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2">Salary</label>
              <input
                className={input}
                type="number"
                name="salary"
                value={form.salary}
                onChange={changeHandler}
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2">Joining Date</label>
              <input
                className={input}
                type="date"
                name="joiningDate"
                value={form.joiningDate}
                onChange={changeHandler}
              />
            </div>

            <div className="lg:col-span-2">
              <label className="block text-slate-300 mb-2">Status</label>

              <select
                className={input}
                name="status"
                value={form.status}
                onChange={changeHandler}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

          </div>

          <div className="flex justify-end mt-10">
            <button
              disabled={saving}
              className="flex items-center gap-3 rounded-2xl bg-blue-600 hover:bg-blue-500 px-8 py-3 text-white font-semibold transition shadow-[0_0_30px_rgba(59,130,246,.45)] disabled:opacity-50"
            >
              <Save size={18} />
              {saving ? "Updating..." : "Update Employee"}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}