"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useValentinesStore } from "@/lib/valentines-store";
import type { LastChoicePage2 } from "@/lib/valentines-store";
import { Page3Backdrop } from "./Page3Backdrop";
import { Page3BackgroundMusic } from "./Page3BackgroundMusic";
import { PointsHUD } from "./PointsHUD";

/** Phase of the Page 3 timeline per Documentation.md */
type Phase = "initial" | "question" | "buttons" | "result2";

const INITIAL_RESULT_YES = "Wrong answer :(\n-5 points.";
const INITIAL_RESULT_HELL = "Correct answer :)\n+5 points.";
const QUESTION_LINE1 = "Are you ready";
const QUESTION_LINE2 = "my T-rex?";
const RESULT2_YES = "You never learn do you :(\n-10 points";
const RESULT2_HELL = "Correct answer :)\n+5 points.";

const DELAY_AFTER_INITIAL_MS = 5000;
const DELAY_AFTER_QUESTION_MS = 3000;
const DELAY_AFTER_RESULT2_MS = 4000;

/** Shared transition for text blocks */
const textTransition = { type: "spring", stiffness: 200, damping: 25 };

/**
 * 3rd Landing Page: shows result of Page 2 choice (+5 / -5), then commitment question
 * and second choice with result, then navigates to /page-4.
 * Uses Landing page 1 background colour and assets for a cute, aesthetic look.
 */
export function Page3Content() {
  const router = useRouter();
  const { points, addPoints, lastChoicePage2 } = useValentinesStore();
  const [phase, setPhase] = useState<Phase>("initial");
  const [secondResult, setSecondResult] = useState<string | null>(null);
  const hasAppliedInitialDelta = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Apply initial points delta once based on lastChoicePage2 (null treated as "hell" if user landed here directly)
  useEffect(() => {
    if (hasAppliedInitialDelta.current) return;
    if (lastChoicePage2 === "yes") {
      addPoints(-5);
      hasAppliedInitialDelta.current = true;
    } else {
      // "hell" or null: add 5
      addPoints(5);
      hasAppliedInitialDelta.current = true;
    }
  }, [lastChoicePage2, addPoints]);

  // Timeline: after initial message → question → buttons
  useEffect(() => {
    const t1 = setTimeout(() => {
      setPhase("question");
    }, DELAY_AFTER_INITIAL_MS);
    timersRef.current.push(t1);

    const t2 = setTimeout(() => {
      setPhase("buttons");
    }, DELAY_AFTER_INITIAL_MS + DELAY_AFTER_QUESTION_MS);
    timersRef.current.push(t2);

    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  // After result2: wait 4s then navigate to /page-4
  useEffect(() => {
    if (phase !== "result2") return;
    const t = setTimeout(() => {
      router.push("/page-4");
    }, DELAY_AFTER_RESULT2_MS);
    timersRef.current.push(t);
    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [phase, router]);

  const handleChoice = (choice: LastChoicePage2) => {
    if (choice === "yes") {
      addPoints(-10);
      setSecondResult(RESULT2_YES);
    } else {
      addPoints(5);
      setSecondResult(RESULT2_HELL);
    }
    setPhase("result2");
  };

  const initialMessage =
    lastChoicePage2 === "yes" ? INITIAL_RESULT_YES : INITIAL_RESULT_HELL;

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center bg-valentine-page overflow-hidden">
      <Page3Backdrop />
      <Page3BackgroundMusic />
      <PointsHUD points={points} />

      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-8 text-center max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {phase === "initial" && initialMessage && (
            <motion.div
              key="initial"
              className="space-y-2"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={textTransition}
            >
              <p className="font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg whitespace-pre-line">
                {initialMessage}
              </p>
            </motion.div>
          )}

          {(phase === "question" || phase === "buttons") && (
            <motion.div
              key="question-block"
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center space-y-1">
                <motion.p
                  className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg"
                  initial={{ opacity: 0, scale: 0.9, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ ...textTransition, delay: 0.1 }}
                >
                  {QUESTION_LINE1}
                </motion.p>
                <motion.p
                  className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-lg"
                  initial={{ opacity: 0, scale: 0.9, y: 24 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ ...textTransition, delay: 0.18 }}
                >
                  {QUESTION_LINE2}
                </motion.p>
              </div>
              {phase === "buttons" && (
                <motion.div
                  className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-8 w-full"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
                >
                  <ChoiceButton choice="yes" onClick={() => handleChoice("yes")} label="Yes, I am in" />
                  <ChoiceButton
                    choice="hell"
                    onClick={() => handleChoice("hell")}
                    label="Hell yeah, I am innn!!!"
                  />
                </motion.div>
              )}
            </motion.div>
          )}

          {phase === "result2" && secondResult && (
            <motion.div
              key="result2"
              className="space-y-2"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={textTransition}
            >
              <p className="font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg whitespace-pre-line">
                {secondResult}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function ChoiceButton({
  choice,
  onClick,
  label,
}: {
  choice: LastChoicePage2;
  onClick: () => void;
  label: string;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="px-8 py-4 sm:px-10 sm:py-5 rounded-2xl font-display text-xl sm:text-2xl md:text-3xl text-white bg-white/20 backdrop-blur border-2 border-white/50 hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page transition-colors shadow-lg"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: choice === "yes" ? 0.1 : 0.25, duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
    </motion.button>
  );
}
