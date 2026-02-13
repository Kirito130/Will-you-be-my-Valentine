"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/lib/assets";

/**
 * Asset entry: src, size in px, position as % of viewport (left, top).
 * Scattered around the page for a cute, aesthetic look.
 */
const ASSETS: { src: string; size: number; left: number; top: number; floatDelay: number; rotateAmount: number }[] = [
  { src: assets.twoHearts, size: 52, left: 8, top: 12, floatDelay: 0, rotateAmount: 5 },
  { src: assets.heartWithWingsFront, size: 48, left: 82, top: 8, floatDelay: 0.3, rotateAmount: -4 },
  { src: assets.cuteDino, size: 64, left: 4, top: 72, floatDelay: 0.6, rotateAmount: 3 },
  { src: assets.gift, size: 44, left: 78, top: 70, floatDelay: 0.2, rotateAmount: -6 },
  { src: assets.heartWithLove, size: 50, left: 72, top: 28, floatDelay: 0.5, rotateAmount: 4 },
  { src: assets.ring, size: 40, left: 12, top: 42, floatDelay: 0.4, rotateAmount: -3 },
  { src: assets.envelopeFront, size: 46, left: 85, top: 48, floatDelay: 0.7, rotateAmount: 2 },
  { src: assets.chocolateFront, size: 42, left: 18, top: 78, floatDelay: 0.1, rotateAmount: -5 },
  { src: assets.heartWithArrow, size: 45, left: 88, top: 85, floatDelay: 0.55, rotateAmount: 6 },
  { src: assets.heartLock, size: 40, left: 6, top: 28, floatDelay: 0.25, rotateAmount: -2 },
  { src: assets.iLoveYou1, size: 54, left: 70, top: 55, floatDelay: 0.45, rotateAmount: 3 },
  { src: assets.boxWithRingFront, size: 48, left: 22, top: 8, floatDelay: 0.65, rotateAmount: -4 },
  { src: assets.handWithLove, size: 44, left: 90, top: 32, floatDelay: 0.15, rotateAmount: 2 },
  { src: assets.heartWithWingsAngle, size: 46, left: 38, top: 4, floatDelay: 0.5, rotateAmount: -3 },
  { src: assets.lockWithHeart, size: 42, left: 52, top: 82, floatDelay: 0.35, rotateAmount: 4 },
];

/** Stagger delay for entrance (seconds) */
const STAGGER = 0.08;

/**
 * Backdrop for Page 3: soft floating assets with staggered entrance and
 * gentle float + rotate. Uses same pink as Landing page 1; assets from Photos/Assets.
 * Respects prefers-reduced-motion by reducing animation intensity.
 */
export function Page3Backdrop() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const on = () => setPrefersReducedMotion(true);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  return (
    <div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden
    >
      {/* Soft radial glow so content stays readable */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.25) 0%, transparent 55%)",
        }}
      />
      <motion.div
        className="absolute inset-0"
        initial="hidden"
        animate="show"
        variants={{
          show: {
            transition: {
              staggerChildren: STAGGER,
              delayChildren: 0.2,
            },
          },
          hidden: {},
        }}
      >
        {ASSETS.map((item, i) => (
          <motion.div
            key={i}
            className="absolute w-[var(--size)] h-[var(--size)] opacity-90 drop-shadow-md will-change-transform"
            style={{
              "--size": `${item.size}px`,
              width: item.size,
              height: item.size,
              left: `${item.left}%`,
              top: `${item.top}%`,
              x: "-50%",
              y: "-50%",
            } as React.CSSProperties}
            variants={{
              hidden: { opacity: 0, scale: 0.6 },
              show: {
                opacity: 0.9,
                scale: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.22, 0.61, 0.36, 1],
                },
              },
            }}
            animate={
              prefersReducedMotion
                ? {}
                : {
                    y: [0, -10, 0],
                    rotate: [0, item.rotateAmount, -item.rotateAmount, 0],
                    transition: {
                      y: {
                        duration: 4 + (i % 3),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: item.floatDelay,
                      },
                      rotate: {
                        duration: 6 + (i % 2),
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: item.floatDelay,
                      },
                    },
                  }
            }
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
      </motion.div>
    </div>
  );
}
