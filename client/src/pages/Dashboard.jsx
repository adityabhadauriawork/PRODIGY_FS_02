import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import EmployeeTable from "../components/EmployeeTable";

import { getEmployees } from "../services/api";

import {
  Users,
  IndianRupee,
  Building2,
  UserCheck,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadEmployees = async () => {
    try {
      setLoading(true);

      const res = await getEmployees();

      setEmployees(res.data.employees);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const totalSalary = employees.reduce(
    (sum, emp) => sum + Number(emp.salary || 0),
    0
  );

  const departments = [
    ...new Set(employees.map((e) => e.department)),
  ];

  const activeEmployees = employees.filter(
    (e) => (e.status || "Active") === "Active"
  );

  return (
    <div className="min-h-screen bg-[#020617] flex">

      <Sidebar />

      <main className="flex-1 overflow-x-hidden">

        <Navbar />

        <div className="px-8 py-8">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-white">
              Dashboard
            </h1>

            <p className="mt-2 text-slate-400">
              Welcome back 👋 Manage your employees from one place.
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
              title="Employees"
              value={employees.length}
              growth="+18%"
              color="#2563eb"
              icon={<Users className="text-white" />}
            />

            <StatCard
              title="Departments"
              value={departments.length}
              growth="+5%"
              color="#9333ea"
              icon={<Building2 className="text-white" />}
            />

            <StatCard
              title="Monthly Salary"
              value={`₹${totalSalary}`}
              growth="+12%"
              color="#059669"
              icon={<IndianRupee className="text-white" />}
            />

            <StatCard
              title="Active Employees"
              value={activeEmployees.length}
              growth="+3%"
              color="#ea580c"
              icon={<UserCheck className="text-white" />}
            />

          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 rounded-3xl border border-slate-800 bg-[#0f172a] p-6 shadow-[0_0_35px_rgba(37,99,235,.08)]"
          >

            <div className="mb-6">

              <h2 className="text-2xl font-semibold text-white">
                Employees
              </h2>

              <p className="text-slate-400">
                Employee Records
              </p>

            </div>

            <EmployeeTable
              employees={employees}
              loading={loading}
              refresh={loadEmployees}
            />

          </motion.div>

        </div>

      </main>

    </div>
  );
}