"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { PAGE7_STAGES } from "@/lib/page7-text";

const CHAR_DELAY_MS = 70;
const BACKSPACE_DELAY_MS = 45;
/** Pause after typing a line before starting backspace. */
const HOLD_AFTER_TYPE_MS = 2200;
/** Pause after backspace before starting next line (except before final). */
const PAUSE_BETWEEN_STAGES_MS = 600;
/** For final stage: hold then trigger grandiose (no backspace). */
const HOLD_FINAL_BEFORE_GRAND_MS = 2500;

const COLORS = ["#ff6b9d", "#c44569", "#ff9ff3", "#ffcccc", "#e84393"];

type Phase = "typing" | "hold" | "backspacing" | "between" | "final_hold" | "final_grand";

interface Page7PromiseFlowProps {
  reducedMotion: boolean;
}

/**
 * Runs the promise flow: for each stage, types out text (typewriter), holds,
 * then backspaces (reverse typewriter). Final stage "I LOVE YOU SAKINA" has a
 * grandiose transition (confetti + scale) and no backspace.
 */
export function Page7PromiseFlow({ reducedMotion }: Page7PromiseFlowProps) {
  const [stageIndex, setStageIndex] = useState(0);
  const [displayLength, setDisplayLength] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [showFinalGrand, setShowFinalGrand] = useState(false);
  const soundRef = useRef<HTMLAudioElement | null>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const isLastStage = stageIndex === PAGE7_STAGES.length - 1;
  const fullText = PAGE7_STAGES[stageIndex];
  const displayText = fullText.slice(0, displayLength);

  const clearTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const playTypewriterSound = () => {
    try {
      if (!soundRef.current) soundRef.current = new Audio("/music/typewriter.wav");
      soundRef.current.currentTime = 0;
      soundRef.current.volume = 0.5;
      soundRef.current.play().catch(() => {});
    } catch {
      // ignore
    }
  };

  useEffect(() => () => clearTimers(), []);

  // Reduced motion: show all stages at once or just final; keep it simple — show final after a delay
  useEffect(() => {
    if (reducedMotion) {
      setStageIndex(PAGE7_STAGES.length - 1);
      setDisplayLength(PAGE7_STAGES[PAGE7_STAGES.length - 1].length);
      setShowFinalGrand(true);
      return () => clearTimers();
    }
  }, [reducedMotion]);

  // Typing: increment displayLength until full
  useEffect(() => {
    if (reducedMotion || phase !== "typing") return;
    if (displayLength >= fullText.length) {
      if (isLastStage) {
        setPhase("final_hold");
        const t = setTimeout(() => {
          setShowFinalGrand(true);
          setPhase("final_grand");
          confetti({ particleCount: 150, spread: 120, origin: { x: 0.5, y: 0.5 }, colors: COLORS, startVelocity: 28 });
          setTimeout(() => confetti({ particleCount: 80, spread: 100, origin: { x: 0.5, y: 0.6 }, colors: COLORS }), 150);
        }, HOLD_FINAL_BEFORE_GRAND_MS);
        timersRef.current.push(t);
      } else {
        setPhase("hold");
        const t = setTimeout(() => setPhase("backspacing"), HOLD_AFTER_TYPE_MS);
        timersRef.current.push(t);
      }
      // Don't clear timers here: effect re-runs when phase changes and would clear the hold timer
      return;
    }
    const char = fullText[displayLength];
    const delay = char === " " ? CHAR_DELAY_MS / 2 : CHAR_DELAY_MS;
    const id = setTimeout(() => {
      setDisplayLength((n) => n + 1);
      if (char !== " ") playTypewriterSound();
    }, delay);
    timersRef.current.push(id);
    return () => clearTimeout(id);
  }, [reducedMotion, phase, displayLength, fullText, isLastStage]);

  // Backspacing: decrement displayLength until 0, then brief pause then next stage
  useEffect(() => {
    if (reducedMotion || phase !== "backspacing") return;
    if (displayLength <= 0) {
      setStageIndex((i) => i + 1);
      setDisplayLength(0);
      setPhase("between");
      const t = setTimeout(() => setPhase("typing"), PAUSE_BETWEEN_STAGES_MS);
      timersRef.current.push(t);
      // Don't return a cleanup that clears t: effect re-runs when phase becomes "between" and would cancel the transition
      return;
    }
    const id = setTimeout(() => setDisplayLength((n) => n - 1), BACKSPACE_DELAY_MS);
    timersRef.current.push(id);
    return () => clearTimeout(id);
  }, [reducedMotion, phase, displayLength]);

  if (reducedMotion) {
    return (
      <motion.div
        className="text-center px-6 py-8 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className="font-display text-3xl sm:text-4xl md:text-5xl text-white drop-shadow-2xl">
          {PAGE7_STAGES[PAGE7_STAGES.length - 1]}
        </p>
      </motion.div>
    );
  }

  const isFinalGrand = phase === "final_grand" && showFinalGrand;

  return (
    <div className="relative z-10 w-full flex flex-col items-center justify-center px-6 py-8 min-h-[200px]">
      <AnimatePresence mode="wait">
        {!isFinalGrand ? (
          <motion.div
            key={`stage-${stageIndex}`}
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg leading-relaxed">
              {displayText}
              {phase === "typing" && (
                <motion.span
                  className="inline-block w-0.5 h-[1em] bg-white ml-0.5 align-baseline"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  aria-hidden
                />
              )}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="final-grand"
            className="text-center max-w-3xl mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <p className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl font-bold tracking-wide">
              I LOVE YOU SAKINA
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
