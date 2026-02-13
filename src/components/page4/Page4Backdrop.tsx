"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/lib/assets";

/**
 * Assets placed on orbital rings. Each ring rotates around the center;
 * inner ring clockwise, outer ring counter-clockwise. No up/down float — pure rotation.
 */
const INNER_RING = [
  { src: assets.twoHearts, size: 44 },
  { src: assets.heartWithWingsFront, size: 40 },
  { src: assets.gift, size: 38 },
  { src: assets.ring, size: 36 },
  { src: assets.heartWithLove, size: 42 },
  { src: assets.heartLock, size: 36 },
];

const OUTER_RING = [
  { src: assets.cuteDino, size: 52 },
  { src: assets.envelopeFront, size: 40 },
  { src: assets.chocolateFront, size: 38 },
  { src: assets.heartWithArrow, size: 40 },
  { src: assets.iLoveYou1, size: 46 },
  { src: assets.handWithLove, size: 40 },
  { src: assets.boxWithRingFront, size: 42 },
  { src: assets.heartWithWingsAngle, size: 40 },
];

const INNER_RADIUS = 140;
const OUTER_RADIUS = 220;
const INNER_DURATION = 35;
const OUTER_DURATION = 48;

/**
 * Backdrop for Page 4: assets orbit around the center in two rings (inner clockwise, outer counter-clockwise).
 * Uses Landing page 2 background; motion is rotation-only — no bobbing or floating like other pages.
 * Respects prefers-reduced-motion by pausing rotation.
 */
export function Page4Backdrop() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      {/* Right half only: orbit center at center of right 50% so rotation stays on the right */}
      <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0"
          style={{ pointerEvents: "none" }}
        >
        {/* Inner ring — clockwise */}
        <motion.div
          className="absolute left-0 top-0 w-0 h-0"
          animate={reducedMotion ? {} : { rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: INNER_DURATION,
            ease: "linear",
          }}
        >
          {INNER_RING.map((item, i) => {
            const angle = (i / INNER_RING.length) * 360;
            return (
              <div
                key={`inner-${i}`}
                className="absolute left-0 top-0 flex items-center justify-center opacity-90 drop-shadow-md"
                style={{
                  width: item.size,
                  height: item.size,
                  transform: `rotate(${angle}deg) translateX(${INNER_RADIUS}px) rotate(${-angle}deg)`,
                }}
              >
                <Image
                  src={item.src}
                  alt=""
                  width={item.size}
                  height={item.size}
                  className="object-contain w-full h-full"
                />
              </div>
            );
          })}
        </motion.div>

        {/* Outer ring — counter-clockwise */}
        <motion.div
          className="absolute left-0 top-0 w-0 h-0"
          animate={reducedMotion ? {} : { rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: OUTER_DURATION,
            ease: "linear",
          }}
        >
          {OUTER_RING.map((item, i) => {
            const angle = (i / OUTER_RING.length) * 360;
            return (
              <div
                key={`outer-${i}`}
                className="absolute left-0 top-0 flex items-center justify-center opacity-90 drop-shadow-md"
                style={{
                  width: item.size,
                  height: item.size,
                  transform: `rotate(${angle}deg) translateX(${OUTER_RADIUS}px) rotate(${-angle}deg)`,
                }}
              >
                <Image
                  src={item.src}
                  alt=""
                  width={item.size}
                  height={item.size}
                  className="object-contain w-full h-full"
                />
              </div>
            );
          })}
        </motion.div>
        </div>
      </div>
    </div>
  );
}
