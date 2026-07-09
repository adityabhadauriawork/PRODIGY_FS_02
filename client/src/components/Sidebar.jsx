import {
  LayoutDashboard,
  Users,
  UserPlus,
  LogOut,
  BriefcaseBusiness,
} from "lucide-react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    {
        title: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
    },
    {
        title: "Employees",
        icon: Users,
        path: "/employees",
    },
    {
        title: "Add Employee",
        icon: UserPlus,
        path: "/add-employee",
    },
 ];

  return (
    <aside className="w-72 h-screen sticky top-0 bg-[#07111f] border-r border-blue-500/20 flex flex-col justify-between flex-shrink-0">

      <div>

        {/* Logo */}

        <div className="px-6 py-8">

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shadow-[0_0_35px_rgba(59,130,246,.45)]">

              <BriefcaseBusiness className="text-white" size={30} />

            </div>

            <div>

              <h2 className="text-2xl font-bold text-white">
                Employee
              </h2>

              <p className="text-slate-400">
                Management
              </p>

            </div>

          </motion.div>

        </div>

        {/* Menu */}

        <div className="px-5 flex flex-col gap-3">

          {menu.map((item) => {

            const Icon = item.icon;

            const active = location.pathname === item.path;

            return (

              <Link key={item.title} to={item.path}>

                <motion.div
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 shadow-[0_0_25px_rgba(59,130,246,.45)] text-white"
                      : "text-slate-300 hover:bg-slate-900"
                  }`}
                >

                  <Icon size={22} />

                  <span className="font-medium text-lg">
                    {item.title}
                  </span>

                </motion.div>

              </Link>

            );

          })}

        </div>

      </div>

      {/* Logout */}

      <div className="p-5">

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/")}
          className="w-full flex items-center justify-center gap-3 rounded-2xl bg-red-500 py-4 text-white font-semibold hover:bg-red-600 transition-all"
        >

          <LogOut size={20} />

          Logout

        </motion.button>

      </div>

    </aside>
  );
}