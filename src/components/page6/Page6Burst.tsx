"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/lib/assets";
import { PAGE6_BURST_HEADLINE } from "@/lib/page6-text";

/** Assets for the celebration bloom — arranged in rings so they scale out from center. */
const BURST_ASSETS = [
  { src: assets.twoHearts, size: 64, angle: 0 },
  { src: assets.heartWithWingsFront, size: 58, angle: 45 },
  { src: assets.cuteDino, size: 72, angle: 90 },
  { src: assets.gift, size: 56, angle: 135 },
  { src: assets.heartWithLove, size: 60, angle: 180 },
  { src: assets.ring, size: 52, angle: 225 },
  { src: assets.chocolateFront, size: 54, angle: 270 },
  { src: assets.heartWithArrow, size: 50, angle: 315 },
  { src: assets.envelopeFront, size: 56, angle: 22 },
  { src: assets.iLoveYou1, size: 62, angle: 112 },
  { src: assets.airBalloon, size: 58, angle: 202 },
  { src: assets.handWithLove, size: 52, angle: 292 },
];

const RADIUS = 160;
const BLOOM_STAGGER = 0.05;
const HEADLINE_DELAY = 0.4;

/**
 * Celebration burst when countdown hits zero: assets "bloom" outward from center
 * in a ring (scale 0 → 1 with stagger), then the headline pops in. No falling
 * confetti — this is a radial bloom, distinct from page 5.
 */
export function Page6Burst() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 pointer-events-none">
      {/* Bloom ring: each asset at angle, scales from center */}
      <div
        className="absolute left-1/2 top-1/2 w-0 h-0"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {BURST_ASSETS.map((item, i) => {
          const rad = (item.angle * Math.PI) / 180;
          const x = Math.cos(rad) * RADIUS - item.size / 2;
          const y = Math.sin(rad) * RADIUS - item.size / 2;
          return (
            <motion.div
              key={i}
              className="absolute left-0 top-0 flex items-center justify-center drop-shadow-2xl"
              style={{
                width: item.size,
                height: item.size,
              }}
              initial={{ scale: 0, opacity: 0, x, y }}
              animate={{ scale: 1, opacity: 0.95, x, y }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
                delay: i * BLOOM_STAGGER,
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
          );
        })}
      </div>
      {/* Headline */}
      <motion.p
        className="relative z-10 font-display text-3xl sm:text-4xl md:text-5xl text-white text-center drop-shadow-2xl px-4 max-w-xl"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 20,
          delay: HEADLINE_DELAY,
        }}
      >
        {PAGE6_BURST_HEADLINE}
      </motion.p>
    </div>
  );
}
