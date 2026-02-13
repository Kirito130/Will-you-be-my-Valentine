"use client";

import { motion } from "framer-motion";

/**
 * Displays the gate question "Are you my dinosaur?" with a gentle entrance animation.
 */
export function QuestionHeader() {
  return (
    <motion.h1
      className="font-display text-4xl sm:text-5xl md:text-6xl text-valentine-deep text-center mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      Are you my dinosaur?
    </motion.h1>
  );
}
