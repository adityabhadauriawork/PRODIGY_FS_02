import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import EmployeeTable from "../components/EmployeeTable";

import {
  Users,
  IndianRupee,
  Building2,
  UserCheck,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#020617] flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">

        <Navbar />

        <div className="px-8 py-8">

          {/* Heading */}

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

          {/* Cards */}

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
              title="Employees"
              value="124"
              growth="+18%"
              color="#2563eb"
              icon={<Users className="text-white" />}
            />

            <StatCard
              title="Departments"
              value="08"
              growth="+5%"
              color="#9333ea"
              icon={<Building2 className="text-white" />}
            />

            <StatCard
              title="Monthly Salary"
              value="₹18.5L"
              growth="+12%"
              color="#059669"
              icon={<IndianRupee className="text-white" />}
            />

            <StatCard
              title="Active Employees"
              value="118"
              growth="+3%"
              color="#ea580c"
              icon={<UserCheck className="text-white" />}
            />

          </div>

          {/* Employee Table */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 rounded-3xl border border-slate-800 bg-[#0f172a] p-6 shadow-[0_0_35px_rgba(37,99,235,.08)]"
          >

            <div className="mb-6 flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-semibold text-white">
                  Employees
                </h2>

                <p className="text-slate-400">
                  Employee Records
                </p>

              </div>

            </div>

            <EmployeeTable />

          </motion.div>

        </div>

      </main>

    </div>
  );
}