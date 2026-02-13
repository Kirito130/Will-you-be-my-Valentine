"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { LOVE_LETTER } from "@/lib/page5-text";

const CHAR_DELAY_MS = 95;
const PARAGRAPH_PAUSE_MS = 1200;
/** Wait time after typewriter finishes before moving to the next stage (prompt). */
const HOLD_AFTER_TYPING_MS = 8000;

interface TypewriterLetterProps {
  onComplete: () => void;
  reducedMotion: boolean;
}

/**
 * Renders the love letter with a typewriter effect (character-by-character).
 * Typewriter sound plays by default from /music/typewriter.wav. Calls onComplete 15s after typing finishes.
 */
export function TypewriterLetter({
  onComplete,
  reducedMotion,
}: TypewriterLetterProps) {
  const [displayLength, setDisplayLength] = useState(0);
  const [done, setDone] = useState(false);
  const soundRef = useRef<HTMLAudioElement | null>(null);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const fullText = LOVE_LETTER;
  const displayText = fullText.slice(0, displayLength);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayLength(fullText.length);
      setDone(true);
      const t = setTimeout(() => onCompleteRef.current(), 400);
      return () => clearTimeout(t);
    }

    if (displayLength >= fullText.length) {
      setDone(true);
      const t = setTimeout(() => onCompleteRef.current(), HOLD_AFTER_TYPING_MS);
      return () => clearTimeout(t);
    }

    const isNewline = fullText[displayLength] === "\n";
    const delay = isNewline ? PARAGRAPH_PAUSE_MS : CHAR_DELAY_MS;
    const char = fullText[displayLength];

    const id = setTimeout(() => {
      setDisplayLength((n) => n + 1);
      if (char !== " " && char !== "\n") {
        try {
          if (!soundRef.current) {
            soundRef.current = new Audio("/music/typewriter.wav");
          }
          soundRef.current.currentTime = 0;
          soundRef.current.volume = 0.6;
          soundRef.current.play().catch(() => {});
        } catch {
          // no sound
        }
      }
    }, delay);

    return () => clearTimeout(id);
  }, [displayLength, fullText.length, reducedMotion]);

  return (
    <motion.div
      className="max-w-2xl mx-auto px-6 py-4 text-left"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <p className="font-display text-lg sm:text-xl text-white/95 drop-shadow-md leading-relaxed whitespace-pre-line">
        {displayText}
        {!done && (
          <motion.span
            className="inline-block w-0.5 h-[1em] bg-white ml-0.5 align-baseline"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            aria-hidden
          />
        )}
      </p>
    </motion.div>
  );
}
