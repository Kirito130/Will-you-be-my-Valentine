"use client";

import { motion } from "framer-motion";

interface PrimaryButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

/**
 * Primary CTA button with hover/press micro-interactions and focus ring.
 */
export function PrimaryButton({
  onClick,
  children,
  disabled = false,
  loading = false,
  className = "",
}: PrimaryButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={`px-8 py-3.5 rounded-2xl font-display text-xl text-white bg-valentine-rose shadow-lg shadow-valentine-rose/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-valentine-rose disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      whileHover={disabled || loading ? {} : { scale: 1.03, boxShadow: "0 12px 28px rgba(225, 29, 72, 0.35)" }}
      whileTap={disabled || loading ? {} : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      aria-busy={loading}
    >
      {loading ? "..." : children}
    </motion.button>
  );
}
