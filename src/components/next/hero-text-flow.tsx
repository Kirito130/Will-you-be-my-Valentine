"use client";

import { motion, AnimatePresence } from "framer-motion";

/**
 * Tokenizes a line by whitespace for diffing.
 */
function tokenize(text: string): string[] {
  return text.trim().split(/\s+/).filter(Boolean);
}

/**
 * Finds the single differing index between two token arrays of the same length, or -1.
 */
function findReplacementIndex(prev: string[], next: string[]): number {
  if (prev.length !== next.length) return -1;
  let idx = -1;
  for (let i = 0; i < prev.length; i++) {
    if (prev[i] !== next[i]) {
      if (idx !== -1) return -1;
      idx = i;
    }
  }
  return idx;
}

/**
 * Finds the index at which a new token was inserted (next = prev + one token).
 */
function findInsertion(prev: string[], next: string[]): { index: number; newToken: string } | null {
  if (next.length !== prev.length + 1) return null;
  for (let i = 0; i <= prev.length; i++) {
    const prevBefore = prev.slice(0, i);
    const prevAfter = prev.slice(i);
    const nextBefore = next.slice(0, i);
    const nextAfter = next.slice(i + 1);
    if (prevBefore.every((t, j) => t === nextBefore[j]) && prevAfter.every((t, j) => t === nextAfter[j])) {
      return { index: i, newToken: next[i] };
    }
  }
  return null;
}

interface HeroTextFlowProps {
  currentText: string;
  previousText: string | null;
}

/** Page 2 hero: much larger text for readability (Parisienne). */
const HERO_TEXT_CLASS =
  "text-center text-white font-display px-6 py-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl";

/**
 * Hero text with word-level animations.
 * Replacement: new word falls from above onto the old word; old word pops and disappears.
 * No replacement (full line / first stage): simple fade-in as before.
 */
export function HeroTextFlow({ currentText, previousText }: HeroTextFlowProps) {
  const prevTokens = previousText ? tokenize(previousText) : [];
  const nextTokens = tokenize(currentText);
  const replacementIdx = findReplacementIndex(prevTokens, nextTokens);
  const insertion = findInsertion(prevTokens, nextTokens);

  // No replacement / first stage: full-line fade
  if (!previousText || (replacementIdx === -1 && !insertion)) {
    return (
      <motion.p
        key={currentText}
        className={HERO_TEXT_CLASS}
        style={{ overflow: "visible" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {currentText}
      </motion.p>
    );
  }

  // One word replaced: new falls from above, old pops and disappears
  if (replacementIdx !== -1) {
    const oldWord = prevTokens[replacementIdx];
    const newWord = nextTokens[replacementIdx];
    return (
      <p
        className={`${HERO_TEXT_CLASS} flex flex-wrap justify-center items-center gap-x-1 gap-y-1`}
        style={{ overflow: "visible" }}
      >
        {nextTokens.map((token, i) => (
          <span key={`${i}-${token}`} className="inline-flex items-center justify-center overflow-visible shrink-0">
            {i === replacementIdx ? (
              <span className="relative inline-flex items-center justify-center min-w-max overflow-visible shrink-0">
                {/* Old word: pops and disappears when new word lands */}
                <motion.span
                  key={`old-${oldWord}`}
                  className="inline-block whitespace-nowrap"
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 0, scale: 1.2 }}
                  transition={{ delay: 0.32, duration: 0.2, ease: "easeOut" }}
                >
                  {oldWord}
                </motion.span>
                {/* New word: falls from above and lands on the old word */}
                <motion.span
                  key={`new-${newWord}`}
                  className="absolute left-0 top-0 inline-block whitespace-nowrap"
                  initial={{ y: -56, opacity: 1 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                >
                  {newWord}
                </motion.span>
              </span>
            ) : (
              <span className="inline-block whitespace-nowrap shrink-0">{token}</span>
            )}
            {i < nextTokens.length - 1 ? "\u00A0" : null}
          </span>
        ))}
      </p>
    );
  }

  // One word inserted: pop-in (keep current animation)
  if (insertion) {
    const { index } = insertion;
    return (
      <p
        className={`${HERO_TEXT_CLASS} flex flex-wrap justify-center items-center gap-x-1 gap-y-1`}
        style={{ overflow: "visible" }}
      >
        {nextTokens.map((token, i) => (
          <span key={`${i}-${token}`} className="inline-flex overflow-visible shrink-0">
            {i === index ? (
              <motion.span
                className="inline-block whitespace-nowrap shrink-0"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 24,
                  mass: 0.8,
                }}
              >
                {token}
              </motion.span>
            ) : (
              <span className="inline-block whitespace-nowrap shrink-0">{token}</span>
            )}
            {i < nextTokens.length - 1 ? "\u00A0" : null}
          </span>
        ))}
      </p>
    );
  }

  return (
    <motion.p
      key={currentText}
      className={HERO_TEXT_CLASS}
      style={{ overflow: "visible" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
    </motion.p>
  );
}
