"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  PROMPT_LINE1,
  PROMPT_LINE2_PREFIX,
  PROMPT_WORDS,
  PROMPT_WORDS_ANIMATED,
} from "@/lib/page5-text";

const LINE2_DELAY_MS = 3000;
const WORD_INTERVAL_MS = 2000;
const HOLD_AFTER_WORDS_MS = 2000;

interface ValentinePromptProps {
  onComplete: () => void;
  /** When true (e.g. restored from localStorage), show full text immediately and call onComplete after 2s. */
  restoredFull?: boolean;
}

/**
 * Scene 3: "So will you do me the honor of being" → 3s → "my Valentine" →
 * then append "now", "and", "forever", "after?" one word at a time (2s intervals). Then onComplete.
 */
export function ValentinePrompt({ onComplete, restoredFull = false }: ValentinePromptProps) {
  const [showLine1, setShowLine1] = useState(true);
  const [showLine2Prefix, setShowLine2Prefix] = useState(restoredFull);
  const [extraWords, setExtraWords] = useState<string[]>(restoredFull ? [...PROMPT_WORDS] : []);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (restoredFull) {
      const t = setTimeout(() => onCompleteRef.current(), 2000);
      return () => clearTimeout(t);
    }
    const t2 = setTimeout(() => setShowLine2Prefix(true), LINE2_DELAY_MS);
    return () => clearTimeout(t2);
  }, [restoredFull]);

  const wordIndexRef = useRef(0);

  useEffect(() => {
    if (restoredFull || !showLine2Prefix) return;
    wordIndexRef.current = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const addWord = () => {
      const i = wordIndexRef.current;
      if (i >= PROMPT_WORDS_ANIMATED.length) {
        timeouts.push(setTimeout(() => onCompleteRef.current(), HOLD_AFTER_WORDS_MS));
        return;
      }
      const word = PROMPT_WORDS_ANIMATED[i];
      wordIndexRef.current += 1;
      setExtraWords((prev) => [...prev, word]);
      timeouts.push(setTimeout(addWord, WORD_INTERVAL_MS));
    };
    timeouts.push(setTimeout(addWord, WORD_INTERVAL_MS));
    return () => timeouts.forEach(clearTimeout);
  }, [showLine2Prefix]);

  return (
    <motion.div
      className="max-w-2xl mx-auto px-6 py-6 text-center space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {showLine1 && (
        <motion.p
          className="font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {PROMPT_LINE1}
        </motion.p>
      )}
      {showLine2Prefix && (
        <motion.p
          className="font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {PROMPT_LINE2_PREFIX}
          {extraWords.map((word, i) => (
            <motion.span
              key={`${i}-${word}`}
              className="inline-block ml-1"
              initial={{ opacity: 0, scale: 0.7, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              {" "}
              {word}
            </motion.span>
          ))}
        </motion.p>
      )}
    </motion.div>
  );
}
