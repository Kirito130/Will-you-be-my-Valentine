"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

/**
 * Builds an array of items to render: words and line breaks, preserving the order of the message.
 */
function getWordsAndBreaks(message: string): Array<{ type: "word"; text: string } | { type: "break" }> {
  const lines = message.split("\n");
  const out: Array<{ type: "word"; text: string } | { type: "break" }> = [];
  for (let i = 0; i < lines.length; i++) {
    const words = lines[i].trim().split(/\s+/).filter(Boolean);
    for (const w of words) out.push({ type: "word", text: w });
    if (i < lines.length - 1) out.push({ type: "break" });
  }
  return out;
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.25,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, scale: 0.4, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 280, damping: 24 },
  },
};

interface SuccessRevealProps {
  message: string;
  /** When true, use reduced motion: single fade-in, no stagger. */
  reducedMotion?: boolean;
}

/**
 * Unique celebration transition for the success message: words reveal one-by-one
 * with a bouncy spring and slight scale, creating a celebratory cascade that
 * hasn’t been used elsewhere on the page.
 */
export function SuccessReveal({ message, reducedMotion = false }: SuccessRevealProps) {
  const items = useMemo(() => getWordsAndBreaks(message), [message]);

  if (reducedMotion) {
    return (
      <motion.p
        className="font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg whitespace-pre-line leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {message}
      </motion.p>
    );
  }

  return (
    <motion.p
      className="font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg leading-relaxed inline-flex flex-wrap justify-center gap-x-2 gap-y-1"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, i) =>
        item.type === "break" ? (
          <br key={`br-${i}`} />
        ) : (
          <motion.span key={`${i}-${item.text}`} variants={wordVariants} className="inline-block">
            {item.text}
          </motion.span>
        )
      )}
    </motion.p>
  );
}
