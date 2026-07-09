import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center mb-10"
    >
      <div
        className="
        w-20
        h-20
        rounded-3xl
        bg-gradient-to-br
        from-blue-500
        to-cyan-400
        flex
        items-center
        justify-center
        shadow-[0_0_45px_rgba(59,130,246,.55)]
        border
        border-blue-400/40
        "
      >
        <BriefcaseBusiness
          size={42}
          className="text-white"
        />
      </div>

      <h1
        className="
        mt-6
        text-4xl
        font-bold
        tracking-wide
        bg-gradient-to-r
        from-blue-400
        via-cyan-300
        to-white
        bg-clip-text
        text-transparent
        "
      >
        Employee Manager
      </h1>

      <p className="text-slate-400 mt-2">
        Smart HR Management Dashboard
      </p>
    </motion.div>
  );
}