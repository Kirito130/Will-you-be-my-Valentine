"use client";

import { motion } from "framer-motion";

interface Page4HUDProps {
  points: number;
  /** When set, show 30s countdown under the points (during active question). */
  secondsLeft?: number | null;
}

/**
 * Page 4 HUD: "Current Points: X points" in top-right, with optional countdown timer below.
 * Points update is animated (count-up/down). Timer resets each question.
 */
export function Page4HUD({ points, secondsLeft }: Page4HUDProps) {
  return (
    <div className="fixed top-5 right-5 z-20 flex flex-col items-end gap-2">
      <motion.div
        className="px-5 py-3 rounded-xl bg-black/45 backdrop-blur-md border-2 border-white/70 shadow-xl ring-2 ring-white/30"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        aria-live="polite"
        aria-label={`Current points: ${points}`}
      >
        <span className="font-display text-xl sm:text-2xl text-white font-semibold drop-shadow-md">
          Current Points:{" "}
          <motion.span
            key={points}
            initial={{ scale: 1.2, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="font-bold text-amber-200"
          >
            {points}
          </motion.span>{" "}
          points
        </span>
      </motion.div>
      {secondsLeft != null && (
        <motion.div
          className="px-3 py-1.5 rounded-lg bg-black/20 backdrop-blur border border-white/30 text-white font-display text-sm sm:text-base tabular-nums"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.25 }}
          aria-live="polite"
        >
          {secondsLeft}s
        </motion.div>
      )}
    </div>
  );
}
