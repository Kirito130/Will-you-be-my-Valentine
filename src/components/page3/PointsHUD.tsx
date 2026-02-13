"use client";

import { motion } from "framer-motion";

interface PointsHUDProps {
  points: number;
}

/**
 * Subtle HUD showing current points. Shown on Page 3 (and Page 4).
 * Animated count when value changes for a polished feel.
 */
export function PointsHUD({ points }: PointsHUDProps) {
  return (
    <motion.div
      className="fixed top-5 right-5 z-20 px-4 py-2 rounded-xl bg-white/25 backdrop-blur border border-white/40 shadow-lg"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      aria-live="polite"
      aria-label={`Current points: ${points}`}
    >
      <span className="font-display text-lg sm:text-xl text-white drop-shadow-sm">
        Points:{" "}
        <motion.span
          key={points}
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="font-semibold"
        >
          {points}
        </motion.span>
      </span>
    </motion.div>
  );
}
