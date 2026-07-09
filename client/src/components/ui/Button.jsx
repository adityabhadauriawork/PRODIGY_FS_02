import { motion } from "framer-motion";

export default function Button({
  children,
  ...props
}) {
  return (
    <motion.button
      type="submit"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
      className="
        w-full
        py-3
        rounded-xl
        font-semibold
        text-white
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        shadow-[0_0_30px_rgba(59,130,246,.45)]
        hover:shadow-[0_0_60px_rgba(59,130,246,.75)]
        duration-300
      "
    >
      {children}
    </motion.button>
  );
}