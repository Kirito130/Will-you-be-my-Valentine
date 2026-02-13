"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Page5Intro, SurpriseHeadline } from "./Page5Intro";
import { Page5BackgroundMusic } from "./Page5BackgroundMusic";
import { Page5SideDinos } from "./Page5SideDinos";
import { TypewriterLetter } from "./TypewriterLetter";
import { ValentinePrompt } from "./ValentinePrompt";
import { FlowersHeartsExplosion } from "./FlowersHeartsExplosion";
import { SuccessReveal } from "./SuccessReveal";
import { YesNoButtons } from "./YesNoButtons";
import { SUCCESS_MESSAGE, PROMPT_LINE1, PROMPT_QUESTION_LINE2 } from "@/lib/page5-text";

const INTRO_HOLD_MS = 4000;
const SUCCESS_HOLD_MS = 10000;
const PAGE5_PERSIST_KEY = "val_page5_stage";

type Scene =
  | "intro"
  | "letter"
  | "prompt"
  | "buttons"
  | "success";

/**
 * Page 5: Surprise intro (bloom) → typewriter letter → Valentine prompt → Yes/No (evasive No) → success → /page-6.
 * Background: Landing page 1 (valentine.page). Assets used in intro with one-time bloom animation.
 */
export function Page5Content() {
  const router = useRouter();
  const [scene, setScene] = useState<Scene>("intro");
  const [reducedMotion, setReducedMotion] = useState(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const restoredPromptRef = useRef(false);

  /** After mount (client-only), restore scene from localStorage to avoid hydration mismatch. */
  useEffect(() => {
    const s = window.localStorage.getItem(PAGE5_PERSIST_KEY);
    if (s === "letter" || s === "prompt" || s === "buttons") {
      setScene(s);
      if (s === "prompt") restoredPromptRef.current = true;
    }
    if (s === "success") {
      setScene("buttons");
    }
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  const goToLetter = useCallback(() => {
    setScene("letter");
    if (typeof window !== "undefined") window.localStorage.setItem(PAGE5_PERSIST_KEY, "letter");
  }, []);
  const goToPrompt = useCallback(() => {
    setScene("prompt");
    if (typeof window !== "undefined") window.localStorage.setItem(PAGE5_PERSIST_KEY, "prompt");
  }, []);
  const goToButtons = useCallback(() => {
    restoredPromptRef.current = false;
    setScene("buttons");
    if (typeof window !== "undefined") window.localStorage.setItem(PAGE5_PERSIST_KEY, "buttons");
  }, []);

  // Intro: hold then transition to letter (skip if we restored to a later stage)
  useEffect(() => {
    if (scene !== "intro") return;
    const t = setTimeout(goToLetter, INTRO_HOLD_MS);
    timersRef.current.push(t);
    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [scene, goToLetter]);

  // Success: after 10s navigate to page-6
  useEffect(() => {
    if (scene !== "success") return;
    const t = setTimeout(() => router.push("/page-6"), SUCCESS_HOLD_MS);
    timersRef.current.push(t);
    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, [scene, router]);

  const handleYes = useCallback(() => {
    setScene("success");
    // Do not persist "success" so reload always shows question/options (per user request).
  }, []);
  const buttonsSectionRef = useRef<HTMLDivElement>(null);

  const showSideDinos =
    scene === "letter" || scene === "prompt" || scene === "buttons" || scene === "success";

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center bg-valentine-page overflow-hidden">
      <Page5BackgroundMusic duck={scene === "letter"} />
      {showSideDinos && <Page5SideDinos />}
      <FlowersHeartsExplosion
        active={scene === "buttons"}
        reducedMotion={reducedMotion}
      />
      <AnimatePresence mode="wait">
        {scene === "intro" && (
          <motion.div
            key="intro"
            className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen px-4"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <Page5Intro />
            <div className="flex flex-col items-center justify-center">
              <SurpriseHeadline />
            </div>
          </motion.div>
        )}

        {scene === "letter" && (
          <motion.div
            key="letter"
            className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen py-12"
            initial={{ opacity: 0, scale: 0.94, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 0.61, 0.36, 1],
              opacity: { duration: 0.5 },
            }}
          >
            <TypewriterLetter
              onComplete={goToPrompt}
              reducedMotion={reducedMotion}
            />
          </motion.div>
        )}

        {scene === "prompt" && (
          <motion.div
            key="prompt"
            className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <ValentinePrompt
              onComplete={goToButtons}
              restoredFull={restoredPromptRef.current}
            />
          </motion.div>
        )}

        {scene === "buttons" && (
          <motion.div
            key="buttons"
            ref={buttonsSectionRef}
            className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen py-12 px-4"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.75,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            <p className="font-display text-2xl sm:text-3xl text-white drop-shadow-lg text-center mb-4">
              {PROMPT_LINE1}
              <br />
              {PROMPT_QUESTION_LINE2}
            </p>
            <YesNoButtons onYes={handleYes} sectionRef={buttonsSectionRef} />
          </motion.div>
        )}

        {scene === "success" && (
          <motion.div
            key="success"
            className="relative z-10 max-w-2xl mx-auto px-6 py-12 text-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            <SuccessReveal message={SUCCESS_MESSAGE} reducedMotion={reducedMotion} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
