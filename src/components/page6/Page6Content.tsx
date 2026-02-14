"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Page6Backdrop } from "./Page6Backdrop";
import { Page6Countdown } from "./Page6Countdown";
import { Page6Burst } from "./Page6Burst";
import { Page6BackgroundMusic } from "./Page6BackgroundMusic";
import {
  PAGE6_STAGES,
  PAGE6_RELEASED_MESSAGE,
} from "@/lib/page6-text";

const STAGE_DURATION_MS = 4000;
const RELEASED_HOLD_MS = 2500;
const BURST_HOLD_MS = 15000;
const PERSIST_KEY = "val_page6_final";

type Phase = "flow" | "final" | "released" | "burst";

/**
 * Flip-in transition: 3D rotateY from 90deg (side) to 0, with opacity.
 * Different from simple slide/bounce used on other pages.
 */
const flipIn = {
  initial: { opacity: 0, rotateY: 90, filter: "blur(8px)" },
  animate: {
    opacity: 1,
    rotateY: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 200, damping: 24 },
  },
  exit: { opacity: 0, rotateY: -90, filter: "blur(8px)", transition: { duration: 0.3 } },
};

/**
 * Page 6: Countdown to 8 PM IST surprise. Stage flow (1–8) with flip-in text transitions,
 * then final stage with timer. When timer hits zero, released message then burst (bloom + headline).
 * Uses Landing page 2 background; assets in backdrop use scattered scale-in + slow rotation (no bounce/orbit).
 */
const FADE_OUT_MS = 700;

export function Page6Content() {
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("flow");
  const [stageIndex, setStageIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [exiting, setExiting] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  // Persist check: if already at final stage, skip flow
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(PERSIST_KEY) === "1") {
      setPhase("final");
      setStageIndex(PAGE6_STAGES.length - 1);
    }
  }, []);

  // Flow: advance stage every 4s through stages 1–7 (indices 0–6); stage 8 is final with timer
  useEffect(() => {
    if (phase !== "flow" || stageIndex >= 6) return;
    const t = setTimeout(() => setStageIndex((i) => i + 1), STAGE_DURATION_MS);
    timersRef.current.push(t);
    return clearTimers;
  }, [phase, stageIndex, clearTimers]);

  // When we reach stage 7 (index 6: "Come back..."), after 4s go to final (stage 8) and persist
  useEffect(() => {
    if (phase !== "flow" || stageIndex !== 6) return;
    const t = setTimeout(() => {
      if (typeof window !== "undefined") window.localStorage.setItem(PERSIST_KEY, "1");
      setPhase("final");
    }, STAGE_DURATION_MS);
    timersRef.current.push(t);
    return clearTimers;
  }, [phase, stageIndex, clearTimers]);

  const handleCountdownZero = useCallback(() => {
    setPhase("released");
    const t = setTimeout(() => setPhase("burst"), RELEASED_HOLD_MS);
    timersRef.current.push(t);
  }, []);

  // After burst, wait 15s then fade out and navigate to page-7 for a smooth transition
  useEffect(() => {
    if (phase !== "burst") return;
    let t2: ReturnType<typeof setTimeout> | null = null;
    const t = setTimeout(() => {
      setExiting(true);
      t2 = setTimeout(() => router.push("/page-7"), FADE_OUT_MS);
    }, BURST_HOLD_MS);
    timersRef.current.push(t);
    return () => {
      clearTimeout(t);
      if (t2) clearTimeout(t2);
    };
  }, [phase, router]);

  const isFinalStage = phase === "final";
  const isReleased = phase === "released";
  const isBurst = phase === "burst";

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center bg-valentine-page2 overflow-hidden">
      <Page6BackgroundMusic />
      <Page6Backdrop />

      <div
        className="relative z-10 w-full flex flex-col items-center justify-center px-6 py-12"
        style={{ perspective: "1200px" }}
      >
        <AnimatePresence mode="wait">
          {/* Flow stages 0–7: flip-in text */}
          {phase === "flow" && (
            <motion.div
              key={`stage-${stageIndex}`}
              className="text-center"
              {...(reducedMotion
                ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
                : flipIn)}
            >
              <p className="font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg">
                {PAGE6_STAGES[stageIndex]}
              </p>
            </motion.div>
          )}

          {/* Final stage: "Your surprise coming in:" on first line, timer on second line (larger, bold, single line) */}
          {isFinalStage && (
            <motion.div
              key="final"
              className="text-center w-full max-w-4xl px-4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg">
                Your surprise coming in:
              </p>
              <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg font-bold mt-3 whitespace-nowrap">
                <Page6Countdown onZero={handleCountdownZero} />
              </p>
            </motion.div>
          )}

          {/* Released: "You did well my T-Rex! All the wait is now over!" */}
          {isReleased && (
            <motion.p
              key="released"
              className="font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg text-center max-w-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
            >
              {PAGE6_RELEASED_MESSAGE}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Burst: overlay with bloom + headline */}
        {isBurst && <Page6Burst />}
      </div>

      {/* Smooth transition overlay: fade to same bg before navigating to Page 7 */}
      {exiting && (
        <motion.div
          className="fixed inset-0 bg-valentine-page2 z-30 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: FADE_OUT_MS / 1000 }}
          aria-hidden
        />
      )}
    </main>
  );
}
