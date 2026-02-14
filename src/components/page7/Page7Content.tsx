"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Page6Backdrop } from "@/components/page6/Page6Backdrop";
import { Page7BackgroundMusic } from "./Page7BackgroundMusic";
import { Page7IntroBurst } from "./Page7IntroBurst";
import { Page7PromiseFlow } from "./Page7PromiseFlow";

type Phase = "intro" | "promises";

/**
 * Page 7: Valentine finale. Same background as Page 6. Starts with a grand
 * Surprise!!! animation (confetti + hearts/flowers), then runs the promise
 * flow with typewriter and backspace between stages, ending with
 * "I LOVE YOU SAKINA" and a grandiose transition.
 *
 * Content that depends on window/matchMedia/animations is only rendered after
 * mount to avoid server/client hydration mismatch.
 */
export function Page7Content() {
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<Phase>("intro");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, [mounted]);

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center bg-valentine-page2 overflow-hidden">
      <Page7BackgroundMusic />
      <Page6Backdrop />

      {/* Render intro/promises only after mount to prevent hydration mismatch */}
      {mounted && (
        <>
          <AnimatePresence mode="wait">
            {phase === "intro" && (
              <Page7IntroBurst
                onComplete={() => setPhase("promises")}
                reducedMotion={reducedMotion}
              />
            )}
          </AnimatePresence>

          {phase === "promises" && (
            <motion.div
              className="relative z-10 w-full flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Page7PromiseFlow reducedMotion={reducedMotion} />
            </motion.div>
          )}
        </>
      )}
    </main>
  );
}
