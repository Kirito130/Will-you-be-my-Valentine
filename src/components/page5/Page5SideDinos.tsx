"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/lib/assets";

/** Dino display size — much bigger for a strong presence on the sides */
const DINO_SIZE = 220;

/**
 * Cute multi-step keyframes for a unique "curious sway" — the dino gently rotates,
 * bobs up and down, and pulses in scale like it's peeking and nodding. Smooth and friendly.
 * Used only for the looping part (nested motion) so entrance doesn't repeat.
 */
const CUTE_SWAY_LOOP = {
  y: [0, -14, -22, -14, 0],
  rotate: [0, 6, -5, 6, 0],
  scale: [1, 1.06, 1.1, 1.06, 1],
};

const CUTE_SWAY_TRANSITION = {
  duration: 4.2,
  repeat: Infinity,
  ease: [0.45, 0, 0.55, 1] as const,
};

/**
 * Animated dino on left and right during typewriter and final text.
 * Uses Dino1.png; you can replace with an animated GIF (e.g. from LottieFiles export)
 * by putting the file in public/Photos/Assets and updating the src.
 */
export function Page5SideDinos() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const h = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden>
      {/* Left dino — outer: entrance once; inner: cute sway loop */}
      <motion.div
        className="absolute left-2 top-1/2 -translate-y-1/2"
        style={{ width: DINO_SIZE, height: DINO_SIZE }}
        initial={{ opacity: 0, x: -60, scale: 0.85 }}
        animate={{ opacity: 0.92, x: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay: 0.2 }}
      >
        <motion.div
          className="w-full h-full"
          animate={reducedMotion ? {} : CUTE_SWAY_LOOP}
          transition={reducedMotion ? {} : CUTE_SWAY_TRANSITION}
        >
          <Image
            src={assets.cuteDino}
            alt=""
            width={DINO_SIZE}
            height={DINO_SIZE}
            className="object-contain drop-shadow-2xl w-full h-full"
          />
        </motion.div>
      </motion.div>

      {/* Right dino — mirrored, entrance then sway out of phase with left */}
      <motion.div
        className="absolute right-2 top-1/2 -translate-y-1/2"
        style={{ width: DINO_SIZE, height: DINO_SIZE }}
        initial={{ opacity: 0, x: 60, scale: 0.85 }}
        animate={{ opacity: 0.92, x: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay: 0.3 }}
      >
        <motion.div
          className="w-full h-full"
          animate={reducedMotion ? {} : CUTE_SWAY_LOOP}
          transition={
            reducedMotion ? {} : { ...CUTE_SWAY_TRANSITION, delay: 2.1 }
          }
        >
          <Image
            src={assets.cuteDino}
            alt=""
            width={DINO_SIZE}
            height={DINO_SIZE}
            className="object-contain drop-shadow-2xl w-full h-full scale-x-[-1]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
