"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroTextFlow } from "./hero-text-flow";
import { ChoiceButtons } from "./ChoiceButtons";
import { Page2BackgroundMusic } from "./Page2BackgroundMusic";
import { Page2Backdrop } from "./Page2Backdrop";
import { useValentinesStore } from "@/lib/valentines-store";

/** 8 stages, 3 seconds each; then 10s hold; then question; 2s later buttons */
const STAGES = [
  "Hiiii Sakina ;)",
  "My Dino",
  "My T-rex",
  "My Love",
  "My True Love",
  "My First Love",
  "My Last",
  "My Forever",
] as const;

const STAGE_DURATION_MS = 3000;
const HOLD_AFTER_LAST_STAGE_MS = 10000;
const DELAY_AFTER_QUESTION_MS = 2000;
const PAGE2_PERSIST_KEY = "val_page2_stage";

type Phase = "stages" | "question" | "buttons";
type PersistedPage2 = "lastStage" | "question" | "buttons";

/**
 * Landing Page 2: timed text flow (Hiiii Sakina ;) → My Forever),
 * then "Are you ready for the surprise?" and two choice buttons to /page-3.
 * Uses background color #E12D36 (valentine-page2).
 */
export function NextPageContent() {
  const { setLastChoicePage2 } = useValentinesStore();
  const [phase, setPhase] = useState<Phase>("stages");
  const [stageIndex, setStageIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const currentText = STAGES[stageIndex];
  const previousText = stageIndex > 0 ? STAGES[stageIndex - 1] : null;

  // Restore from localStorage after mount (avoids hydration mismatch)
  useEffect(() => {
    const s = window.localStorage.getItem(PAGE2_PERSIST_KEY) as PersistedPage2 | null;
    if (s === "buttons") {
      setPhase("question");
      setShowQuestion(true);
      setShowButtons(true);
    } else if (s === "question") {
      setPhase("question");
      setShowQuestion(true);
      setShowButtons(false);
    } else if (s === "lastStage") {
      setStageIndex(STAGES.length - 1);
      setPhase("stages");
      setShowQuestion(false);
      setShowButtons(false);
    }
  }, []);

  // Advance stage every 3s while in "stages" phase (timeout per step so no interval cleanup issues)
  useEffect(() => {
    if (phase !== "stages" || stageIndex >= STAGES.length - 1) return;
    const t = setTimeout(() => setStageIndex((i) => i + 1), STAGE_DURATION_MS);
    return () => clearTimeout(t);
  }, [phase, stageIndex]);

  // When we reach last stage, persist and wait 10s then show question
  useEffect(() => {
    if (stageIndex < STAGES.length - 1) return;
    window.localStorage.setItem(PAGE2_PERSIST_KEY, "lastStage");
    const t = setTimeout(() => {
      setPhase("question");
      setShowQuestion(true);
      window.localStorage.setItem(PAGE2_PERSIST_KEY, "question");
    }, HOLD_AFTER_LAST_STAGE_MS);
    return () => clearTimeout(t);
  }, [stageIndex]);

  // 2s after question appears, show buttons and persist
  useEffect(() => {
    if (!showQuestion) return;
    const t = setTimeout(() => {
      setShowButtons(true);
      window.localStorage.setItem(PAGE2_PERSIST_KEY, "buttons");
    }, DELAY_AFTER_QUESTION_MS);
    return () => clearTimeout(t);
  }, [showQuestion]);

  const handleChoice = useCallback(
    (choice: "yes" | "hell" | null) => {
      if (choice) setLastChoicePage2(choice);
    },
    [setLastChoicePage2]
  );

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-valentine-page2 px-6 py-8 overflow-x-hidden overflow-y-auto">
      <Page2Backdrop />
      <Page2BackgroundMusic />
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        {phase === "stages" && (
          <motion.div
            key="flow"
            className="flex flex-col items-center justify-center min-h-[40vh] w-full overflow-visible"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <HeroTextFlow currentText={currentText} previousText={previousText} />
          </motion.div>
        )}

        {phase === "question" && (
          <motion.div
            key="question"
            className="flex flex-col items-center justify-center min-h-[40vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p
              className="text-center text-white font-display max-w-2xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            >
              Are you ready for the surprise?
            </motion.p>
            {showButtons && <ChoiceButtons onChoice={handleChoice} />}
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </main>
  );
}
