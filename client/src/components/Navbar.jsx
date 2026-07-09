import { Bell, Search, UserCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="sticky top-0 z-30 flex items-center justify-between bg-[#07111f]/90 backdrop-blur-xl border-b border-blue-500/20 px-8 py-5"
    >
      {/* Search */}

      <div className="relative w-full max-w-lg">

        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search employees..."
          className="
          w-full
          rounded-2xl
          border
          border-slate-700
          bg-slate-900/80
          py-3
          pl-12
          pr-5
          text-white
          placeholder:text-slate-500
          outline-none
          transition-all
          focus:border-blue-500
          focus:shadow-[0_0_18px_rgba(59,130,246,.45)]
          "
        />

      </div>

      {/* Right Side */}

      <div className="ml-8 flex items-center gap-5">

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          border-slate-700
          bg-slate-900
          hover:border-blue-500
          hover:shadow-[0_0_20px_rgba(59,130,246,.35)]
          transition-all
          "
        >
          <Bell className="text-blue-400" size={22} />
        </motion.button>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-2">

          <UserCircle2
            size={46}
            className="text-cyan-400"
          />

          <div>

            <h3 className="text-white text-lg font-semibold">
              Admin
            </h3>

            <p className="text-sm text-slate-400">
              Administrator
            </p>

          </div>

        </div>

      </div>
    </motion.header>
  );
}