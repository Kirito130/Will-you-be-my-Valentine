"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/lib/assets";

/**
 * Scattered asset positions (percent of viewport). Fixed so layout is stable;
 * we use scale-in + slow rotation only — no bounce, no orbit (different from pages 2 and 4).
 */
const ASSET_CONFIG = [
  { src: assets.twoHearts, size: 56, left: 8, top: 12 },
  { src: assets.heartWithWingsFront, size: 52, left: 78, top: 8 },
  { src: assets.heartWithLove, size: 48, left: 12, top: 72 },
  { src: assets.gift, size: 50, left: 82, top: 70 },
  { src: assets.cuteDino, size: 58, left: 5, top: 42 },
  { src: assets.ring, size: 44, left: 88, top: 38 },
  { src: assets.chocolateFront, size: 46, left: 72, top: 88 },
  { src: assets.heartWithArrow, size: 42, left: 18, top: 22 },
  { src: assets.envelopeFront, size: 48, left: 75, top: 25 },
  { src: assets.iLoveYou1, size: 54, left: 22, top: 82 },
  { src: assets.heartLock, size: 40, left: 85, top: 55 },
  { src: assets.handWithLove, size: 46, left: 42, top: 6 },
  { src: assets.airBalloon, size: 52, left: 58, top: 78 },
  { src: assets.heartWithWingsAngle, size: 44, left: 35, top: 88 },
];

/** Slow rotation duration (one full turn) — dreamy, not like page 4 orbit. */
const ROTATION_DURATION = 80;

/**
 * Backdrop for Page 6: assets scattered at fixed positions. Each asset
 * scales in with a staggered delay (sprinkle-in). Optional very slow
 * rotation for a gentle, unique motion. No bounce, no orbital movement.
 */
export function Page6Backdrop() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden
    >
      {/* Soft radial glow so assets sit on the background nicely */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 65%)",
        }}
      />
      {ASSET_CONFIG.map((item, i) => (
        <motion.div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2 opacity-90 drop-shadow-lg"
          style={{
            left: `${item.left}%`,
            top: `${item.top}%`,
            width: item.size,
            height: item.size,
          }}
          initial={{ scale: 0, opacity: 0, rotate: -24 }}
          animate={{
            scale: 1,
            opacity: 0.9,
            rotate: reducedMotion ? 0 : 360,
          }}
          transition={{
            scale: { type: "spring", stiffness: 200, damping: 22, delay: i * 0.1 },
            opacity: { duration: 0.4, delay: i * 0.1 },
            rotate: reducedMotion
              ? {}
              : {
                  repeat: Infinity,
                  duration: ROTATION_DURATION,
                  ease: "linear",
                  delay: i * 0.12,
                },
          }}
        >
          <Image
            src={item.src}
            alt=""
            width={item.size}
            height={item.size}
            className="object-contain w-full h-full"
          />
        </motion.div>
      ))}
    </div>
  );
}
