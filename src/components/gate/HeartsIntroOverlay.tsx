"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/lib/assets";

/** Heart asset + display size for the "coming closer" effect */
const HEART_SOURCES = [
  { src: assets.twoHearts, baseSize: 140 },
  { src: assets.heartWithWingsFront, baseSize: 130 },
  { src: assets.heartWithLove, baseSize: 145 },
  { src: assets.heartWithArrow, baseSize: 125 },
  { src: assets.heartWithWingsAngle, baseSize: 135 },
];

/**
 * Full-screen hearts that start small, "come closer" (scale up) and cover the whole page.
 * Used for intro (then smooth crossfade to main) and exit (then navigate to page 2).
 */
export function HeartsIntroOverlay() {
  // Grid + scattered positions so hearts cover the whole viewport when scaled up
  const positions: { top: string; left: string; delay: number; scaleEnd: number; duration: number }[] = [];
  const rows = 5;
  const cols = 6;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const k = i * cols + j;
      const top = 8 + i * 20 + (j % 2) * 6;
      const left = 2 + j * 18 + (i % 2) * 4;
      const delay = (i * 0.08) + (j * 0.06) + (k % 5) * 0.012;
      const scaleEnd = 1.4 + (k % 7) * 0.1;
      const duration = 2.2 + (k % 3) * 0.12;
      positions.push({
        top: `${top}%`,
        left: `${left}%`,
        delay,
        scaleEnd,
        duration,
      });
    }
  }

  return (
    <div className="fixed inset-0 z-20 overflow-hidden pointer-events-none" aria-hidden>
      {/* Soft background so hearts sit on color */}
      <motion.div
        className="absolute inset-0 bg-valentine-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      {/* Hearts: start small (far away), scale up to cover the page (coming closer) */}
      {positions.map((pos, i) => {
        const heart = HEART_SOURCES[i % HEART_SOURCES.length];
        return (
          <motion.div
            key={i}
            className="absolute will-change-transform"
            style={{
              top: pos.top,
              left: pos.left,
              width: heart.baseSize,
              height: heart.baseSize,
              transformOrigin: "50% 50%",
            }}
            initial={{
              opacity: 0.4,
              scale: 0.15,
            }}
            animate={{
              opacity: 0.92,
              scale: pos.scaleEnd,
            }}
            transition={{
              opacity: {
                duration: 1.1,
                delay: pos.delay,
                ease: [0.22, 0.61, 0.36, 1],
              },
              scale: {
                duration: pos.duration,
                delay: pos.delay,
                ease: [0.34, 1.2, 0.64, 1],
              },
            }}
          >
            <Image
              src={heart.src}
              alt=""
              width={heart.baseSize}
              height={heart.baseSize}
              className="object-contain drop-shadow-xl w-full h-full"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
