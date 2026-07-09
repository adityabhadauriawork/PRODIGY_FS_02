import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import EmployeeTable from "../components/EmployeeTable";

import { getEmployees } from "../services/api";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadEmployees = async () => {
    try {
      setLoading(true);

      const res = await getEmployees();

      setEmployees(res.data.employees || []);
    } catch (err) {
      console.error(err);
      alert("Unable to load employees");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#020617]">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">

          <div className="mb-8 flex items-center justify-between">

            <div>
              <h1 className="text-4xl font-bold text-white">
                Employees
              </h1>

              <p className="mt-2 text-slate-400">
                Manage your employee records
              </p>
            </div>

            <Link
              to="/add-employee"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 transition"
            >
              + Add Employee
            </Link>

          </div>

          <EmployeeTable
            employees={employees}
            loading={loading}
            refresh={loadEmployees}
          />

        </div>
      </div>
    </div>
  );
}