"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AnimatedBackdrop } from "./AnimatedBackdrop";
import { QuestionHeader } from "./QuestionHeader";
import { PasswordInput } from "./PasswordInput";
import { PrimaryButton } from "./PrimaryButton";
import { BackgroundMusic } from "./BackgroundMusic";
import { HeartsIntroOverlay } from "./HeartsIntroOverlay";
import { isCorrectPassword } from "@/lib/gate-password";
import { assets } from "@/lib/assets";

const GATE_OK_KEY = "val_gate_ok";
/** Start crossfade to main as hearts finish filling (no halt). Hearts peak ~2.5–2.8s */
const INTRO_DURATION_MS = 2600;
/** Exit overlay shown this long before navigating to page 2 */
const EXIT_HEARTS_DURATION_MS = 2500;
/** Overlay fade-out duration – keeps crossfade smooth */
const OVERLAY_EXIT_DURATION = 0.85;
/** Main content starts fading in almost immediately for seamless crossfade */
const MAIN_ENTER_DELAY = 0.12;

/**
 * Gate Page: "Are you my dinosaur?" with password (T-Rex) validation.
 * - On first open: show floating hearts intro, then transition to main content.
 * - On correct password: same hearts transition, then navigate to /next.
 * - Dino is inside the white card and larger; background hearts are bigger and more visible.
 */
export function GatePage() {
  const router = useRouter();
  const [showIntro, setShowIntro] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [exiting, setExiting] = useState(false);

  // After intro duration, transition to main content
  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), INTRO_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  const handleSubmit = useCallback(() => {
    if (isSubmitting || exiting) return;
    setError(false);
    if (!password.trim()) return;

    if (isCorrectPassword(password)) {
      setIsSubmitting(true);
      setExiting(true);
      if (typeof window !== "undefined") {
        sessionStorage.setItem(GATE_OK_KEY, "1");
      }
      // Same transition as intro: show hearts overlay, then navigate
      setTimeout(() => {
        router.push("/next");
      }, EXIT_HEARTS_DURATION_MS);
    } else {
      setError(true);
    }
  }, [password, isSubmitting, exiting, router]);

  const clearError = useCallback(() => setError(false), []);

  return (
    <>
      <AnimatedBackdrop />
      <BackgroundMusic allowPlay={!showIntro} />

      {/* Intro: hearts come closer and cover the page, then smooth crossfade to main */}
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            className="fixed inset-0 z-30"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.08,
              transition: {
                duration: OVERLAY_EXIT_DURATION,
                ease: [0.22, 0.61, 0.36, 1],
              },
            }}
            transition={{ duration: 0.4 }}
            style={{ transformOrigin: "50% 50%" }}
          >
            <HeartsIntroOverlay />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8">
        <AnimatePresence mode="wait">
          {exiting ? (
            /* Exit: same hearts transition, then navigate */
            <motion.div
              key="exit"
              className="fixed inset-0 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <HeartsIntroOverlay />
            </motion.div>
          ) : !showIntro ? (
            <motion.div
              key="card"
              className="w-full max-w-md flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.35 } }}
              transition={{
                duration: 0.9,
                delay: MAIN_ENTER_DELAY,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              {/* Centered card: dino inside white form, bigger */}
              <motion.div
                className="w-full rounded-3xl bg-white/90 backdrop-blur-md shadow-xl shadow-valentine-pink/25 border border-white/80 p-8 flex flex-col items-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: MAIN_ENTER_DELAY + 0.1,
                  duration: 0.6,
                  ease: [0.22, 0.61, 0.36, 1],
                }}
              >
                {/* Dino inside the white card - larger */}
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    rotate: [0, -2, 2, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5 },
                    y: { duration: 0.4 },
                    rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                >
                  <Image
                    src={assets.cuteDino}
                    alt="Cute dinosaur"
                    width={200}
                    height={200}
                    className="drop-shadow-xl object-contain"
                    priority
                  />
                </motion.div>

                <QuestionHeader />
                <p className="text-valentine-pink/90 text-base sm:text-lg mb-6 mt-1">
                  Only the right dino may enter 🦖
                </p>

                <div className="w-full flex flex-col items-center gap-4">
                  <PasswordInput
                    value={password}
                    onChange={(v) => { setPassword(v); clearError(); }}
                    onSubmit={handleSubmit}
                    error={error}
                    onErrorShakeEnd={clearError}
                    disabled={isSubmitting}
                  />
                  <PrimaryButton
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    loading={isSubmitting}
                  >
                    Enter
                  </PrimaryButton>
                </div>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>
    </>
  );
}
