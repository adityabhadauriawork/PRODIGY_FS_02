import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

export default function StatCard({
  title,
  value,
  icon,
  color,
  growth,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-700/70
      bg-gradient-to-br
      from-slate-900
      via-slate-900
      to-slate-950
      p-7
      shadow-[0_0_25px_rgba(37,99,235,.10)]
      hover:shadow-[0_0_40px_rgba(37,99,235,.28)]
      "
    >
      {/* Glow */}

      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl opacity-30"
        style={{
          background: color,
        }}
      />

      {/* Top */}

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm uppercase tracking-wider text-slate-400">

            {title}

          </p>

          <h1 className="mt-3 text-4xl font-bold text-white">

            {value}

          </h1>

        </div>

        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${color}, #38bdf8)`,
          }}
        >
          {icon}
        </div>

      </div>

      {/* Bottom */}

      <div className="mt-8 flex items-center justify-between">

        <div className="flex items-center gap-2 text-emerald-400">

          <TrendingUp size={18} />

          <span className="font-semibold">

            {growth}

          </span>

        </div>

        <span className="text-sm text-slate-500">

          This Month

        </span>

      </div>

      {/* Bottom Glow */}

      <div
        className="absolute bottom-0 left-0 h-[2px] w-full"
        style={{
          background: color,
        }}
      />
    </motion.div>
  );
}