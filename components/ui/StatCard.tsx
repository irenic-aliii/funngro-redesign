"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  label: string;
  value: string;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -3, borderColor: "rgba(62,207,142,0.32)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex flex-col gap-1.5 rounded-xl border border-line bg-black/20 px-4 py-3.5"
    >
      <span className="font-mono text-lg font-medium text-mint">{value}</span>
      <span className="text-xs text-ink-faint">{label}</span>
    </motion.div>
  );
}
