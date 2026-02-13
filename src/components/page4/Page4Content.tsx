"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { useValentinesStore } from "@/lib/valentines-store";
import {
  QUIZ_QUESTIONS,
  TIMEOUT_DELTA,
  TIMEOUT_MESSAGE,
  type QuizOption,
} from "@/lib/quiz-data";
import { Page4Backdrop } from "./Page4Backdrop";
import { Page4BackgroundMusic } from "./Page4BackgroundMusic";
import { Page4HUD } from "./Page4HUD";

const INTRO_COPY =
  "Before I show you the surprise my love I need to make sure that you are not an evil imposter Dino trying to ruin my surprise for my T-rex. So answer the 5 questions and get at least 30 points in order to prove me you are my one and only T-rex.";

const INTRO_DELAY_MS = 3000;
const NOTE_TO_QUESTION_MS = 3000;
const QUESTION_TO_OPTIONS_MS = 2000;
const RESULT_HOLD_MS = 3000;
const END_HOLD_MS = 6000;
const COUNTDOWN_SECONDS = 30;
const PAGE4_PERSIST_KEY = "val_page4_stage";

type Step = "intro" | "sure" | "quiz" | "end";
type QuizPhase = "note" | "question" | "options" | "result";

const PASS_MESSAGE =
  "Yayyyy, you did it! You proved that you are my one and only true love, my T-Rex 💖";
const FAIL_MESSAGE =
  "Don't worry! I know you are my one and only true love, T-Rex. Even though you messed up, I'm not letting you go cause you are mine forever now.";

/**
 * 4th Landing Page — Anti-Impostor Quiz.
 * Intro → "I am T-rex" → "Sure, we'll see that" → 5 questions (note → question → options, 30s timer) → pass/fail end → CTA to page-5.
 * Uses Landing page 2 background and orbital backdrop.
 */
export function Page4Content() {
  const router = useRouter();
  const { points, addPoints } = useValentinesStore();

  const [step, setStep] = useState<Step>("intro");
  const [showIntroButton, setShowIntroButton] = useState(false);
  const [sureText, setSureText] = useState(false);

  const [qIndex, setQIndex] = useState(0);
  const [phase, setPhase] = useState<QuizPhase>("note");
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const [outcome, setOutcome] = useState<string | null>(null);
  const [showEndCTA, setShowEndCTA] = useState(false);

  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Restore from localStorage after mount (avoids hydration mismatch)
  useEffect(() => {
    const s = window.localStorage.getItem(PAGE4_PERSIST_KEY);
    if (s === "end") {
      setStep("end");
      setShowEndCTA(true);
    } else if (s === "lastQuestion") {
      setStep("quiz");
      setQIndex(QUIZ_QUESTIONS.length - 1);
      setPhase("note");
    }
  }, []);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  // Intro: after 3s show "I am T-rex" button
  useEffect(() => {
    if (step !== "intro") return;
    const t = setTimeout(() => setShowIntroButton(true), INTRO_DELAY_MS);
    timersRef.current.push(t);
    return clearTimers;
  }, [step, clearTimers]);

  // Click "I am T-rex": show "Sure, we'll see that" then go to quiz
  const handleStartQuiz = useCallback(() => {
    setShowIntroButton(false);
    setSureText(true);
    const t = setTimeout(() => {
      setSureText(false);
      setStep("quiz");
      setQIndex(0);
      setPhase("note");
    }, 2500);
    timersRef.current.push(t);
  }, []);

  // Quiz phase timeline: note → (3s) → question → (2s) → options + timer
  useEffect(() => {
    if (step !== "quiz" || phase !== "note") return;
    const t = setTimeout(() => {
      setPhase("question");
    }, NOTE_TO_QUESTION_MS);
    timersRef.current.push(t);
    return () => clearTimers();
  }, [step, phase, clearTimers]);

  useEffect(() => {
    if (step !== "quiz" || phase !== "question") return;
    const t = setTimeout(() => {
      setPhase("options");
      setSecondsLeft(COUNTDOWN_SECONDS);
    }, QUESTION_TO_OPTIONS_MS);
    timersRef.current.push(t);
    return () => clearTimers();
  }, [step, phase, clearTimers]);

  // Countdown tick when in options phase — start at 30 and decrement every second
  useEffect(() => {
    if (step !== "quiz" || phase !== "options") return;
    setSecondsLeft(COUNTDOWN_SECONDS);
    const id = setInterval(() => {
      setSecondsLeft((prev) => (prev == null || prev <= 0 ? null : prev - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [step, phase, qIndex]);

  // When countdown hits 0, apply timeout outcome
  useEffect(() => {
    if (secondsLeft !== 0 || step !== "quiz" || phase !== "options") return;
    addPoints(TIMEOUT_DELTA);
    setOutcome(TIMEOUT_MESSAGE);
    setPhase("result");
    setSecondsLeft(null);
  }, [secondsLeft, step, phase, addPoints]);

  // After result: wait 3s then next question or end; persist when reaching end
  useEffect(() => {
    if (step !== "quiz" || phase !== "result") return;
    const t = setTimeout(() => {
      setOutcome(null);
      if (qIndex + 1 >= QUIZ_QUESTIONS.length) {
        setStep("end");
        setSecondsLeft(null);
        window.localStorage.setItem(PAGE4_PERSIST_KEY, "end");
      } else {
        const nextIndex = qIndex + 1;
        if (nextIndex === QUIZ_QUESTIONS.length - 1) {
          window.localStorage.setItem(PAGE4_PERSIST_KEY, "lastQuestion");
        }
        setQIndex(nextIndex);
        setPhase("note");
      }
    }, RESULT_HOLD_MS);
    timersRef.current.push(t);
    return () => clearTimers();
  }, [step, phase, qIndex, clearTimers]);

  // End screen: after 6s show CTA
  useEffect(() => {
    if (step !== "end") return;
    const t = setTimeout(() => setShowEndCTA(true), END_HOLD_MS);
    timersRef.current.push(t);
    return () => clearTimers();
  }, [step, clearTimers]);

  // Confetti celebration when final end screen appears
  const hasTriggeredConfetti = useRef(false);
  useEffect(() => {
    if (step !== "end" || hasTriggeredConfetti.current) return;
    hasTriggeredConfetti.current = true;
    const duration = 2500;
    const end = Date.now() + duration;
    const colors = ["#fff", "#fce7f3", "#f472b6", "#e11d48", "#fbbf24"];
    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    };
    frame();
  }, [step]);

  const handleOptionSelect = useCallback(
    (option: QuizOption) => {
      if (phase !== "options") return;
    setSecondsLeft(null);
      addPoints(option.delta);
      setOutcome(option.outcomeMessage);
      setPhase("result");
    },
    [phase, addPoints]
  );

  const handleGoToSurprise = useCallback(() => {
    router.push("/page-5");
  }, [router]);

  const question = QUIZ_QUESTIONS[qIndex];
  const showTimerAboveQuestion =
    step === "quiz" && (phase === "question" || phase === "options");
  const timerValue = phase === "options" ? (secondsLeft ?? 30) : 30;

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center bg-valentine-page2 overflow-hidden">
      <Page4Backdrop />
      <Page4BackgroundMusic />
      <Page4HUD points={points} />

      {/* Content on the left half so it doesn't overlap the right-side orbit */}
      <div className="relative z-10 w-full flex justify-start min-h-screen">
        <div className="w-full max-w-xl flex flex-col items-center justify-center px-8 py-8 text-center">
        <AnimatePresence mode="wait">
          {step === "intro" && !sureText && (
            <motion.div
              key="intro"
              className="space-y-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-display text-lg sm:text-xl md:text-2xl text-white drop-shadow-lg leading-relaxed">
                {INTRO_COPY}
              </p>
              {showIntroButton && (
                <motion.button
                  type="button"
                  onClick={handleStartQuiz}
                  className="px-8 py-4 rounded-2xl font-display text-xl sm:text-2xl text-white bg-white/25 backdrop-blur border-2 border-white/50 hover:bg-white/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page2 transition-colors shadow-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  I am T-rex
                </motion.button>
              )}
            </motion.div>
          )}

          {step === "intro" && sureText && (
            <motion.p
              key="sure"
              className="font-display text-2xl sm:text-3xl text-white drop-shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              Sure, we&apos;ll see that
            </motion.p>
          )}

          {step === "quiz" && question && phase === "result" && outcome && (
            <motion.div
              key={`result-${qIndex}`}
              className="w-full space-y-4"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 22 }}
            >
              <p className="font-display text-xl sm:text-2xl md:text-3xl text-white drop-shadow-lg whitespace-pre-line">
                {outcome.replace(" | ", "\n")}
              </p>
            </motion.div>
          )}

          {step === "quiz" && question && phase !== "result" && (
            <motion.div
              key={`q-${qIndex}-${phase}`}
              className="w-full space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {phase === "note" && (
                <p className="font-display text-xl sm:text-2xl text-white/95 drop-shadow-md">
                  {question.note}
                </p>
              )}
              {(phase === "question" || phase === "options") && (
                <>
                  {showTimerAboveQuestion && (
                    <p
                      className="font-display text-2xl sm:text-3xl text-white drop-shadow-md tabular-nums"
                      aria-live="polite"
                    >
                      Time Left: {timerValue}
                    </p>
                  )}
                  <p className="font-display text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg">
                    {question.question}
                  </p>
                  {phase === "options" && (
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, staggerChildren: 0.05 }}
                    >
                      {question.options.map((opt, i) => (
                        <motion.button
                          key={opt.id}
                          type="button"
                          onClick={() => handleOptionSelect(opt)}
                          className="px-5 py-3 rounded-xl font-display text-lg sm:text-xl text-white bg-white/20 backdrop-blur border-2 border-white/40 hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page2 text-left transition-colors"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.05 * i }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {opt.id}) {opt.label}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </>
              )}
            </motion.div>
          )}

          {step === "end" && (
            <motion.div
              key="end"
              className="space-y-6"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-display text-xl sm:text-2xl md:text-3xl text-white drop-shadow-lg leading-relaxed">
                {points >= 30 ? PASS_MESSAGE : FAIL_MESSAGE}
              </p>
              {showEndCTA && (
                <motion.button
                  type="button"
                  onClick={handleGoToSurprise}
                  className="px-8 py-4 rounded-2xl font-display text-xl sm:text-2xl text-white bg-white/25 backdrop-blur border-2 border-white/50 hover:bg-white/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page2 transition-colors shadow-lg"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  I wanna see my surprise!
                </motion.button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
