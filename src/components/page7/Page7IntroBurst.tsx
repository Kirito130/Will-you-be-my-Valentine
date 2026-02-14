"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/lib/assets";

/** Romantic + surprise colors for confetti. */
const COLORS = ["#ff6b9d", "#c44569", "#f8b500", "#ff9ff3", "#f368e0", "#ffcccc", "#e84393", "#fff"];

/** Bloom ring assets for the grand Surprise intro (hearts, flowers, love). */
const BURST_ASSETS = [
  { src: assets.twoHearts, size: 68, angle: 0 },
  { src: assets.heartWithWingsFront, size: 62, angle: 40 },
  { src: assets.heartWithLove, size: 64, angle: 80 },
  { src: assets.gift, size: 58, angle: 120 },
  { src: assets.cuteDino, size: 70, angle: 160 },
  { src: assets.heartWithArrow, size: 56, angle: 200 },
  { src: assets.chocolateFront, size: 54, angle: 240 },
  { src: assets.ring, size: 52, angle: 280 },
  { src: assets.envelopeFront, size: 56, angle: 320 },
  { src: assets.iLoveYou1, size: 64, angle: 20 },
  { src: assets.iLoveYou2, size: 60, angle: 100 },
  { src: assets.handWithLove, size: 54, angle: 180 },
  { src: assets.airBalloon, size: 58, angle: 260 },
];

const RADIUS = 180;
const BLOOM_STAGGER = 0.04;

interface Page7IntroBurstProps {
  onComplete: () => void;
  reducedMotion: boolean;
}

/**
 * Grand romantic "Surprise!!!" intro: confetti burst + radial bloom of hearts/flowers.
 * Calls onComplete after the animation so the promise flow can start.
 */
export function Page7IntroBurst({ onComplete, reducedMotion }: Page7IntroBurstProps) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (reducedMotion) {
      onComplete();
      return;
    }

    /* Always schedule transition to next phase (survives React Strict Mode double-mount). */
    const doneTimer = setTimeout(onComplete, 3200);

    /* Fire confetti only once; second effect run (strict mode) skips confetti but keeps doneTimer. */
    if (firedRef.current) {
      return () => clearTimeout(doneTimer);
    }
    firedRef.current = true;

    const origin = { x: 0.5, y: 0.5 };

    confetti({
      particleCount: 120,
      spread: 110,
      origin,
      startVelocity: 30,
      colors: COLORS,
      ticks: 220,
      gravity: 0.75,
      scalar: 1.2,
      drift: 0.15,
    });
    const t1 = setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 90,
        origin,
        startVelocity: 24,
        colors: COLORS,
        ticks: 200,
        gravity: 0.7,
        scalar: 1,
      });
    }, 100);
    const t2 = setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 130,
        origin,
        startVelocity: 20,
        angle: 90,
        colors: COLORS,
        ticks: 180,
        gravity: 0.65,
      });
    }, 200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(doneTimer);
    };
  }, [onComplete, reducedMotion]);

  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 pointer-events-none">
      {/* Radial bloom: hearts and flowers scale out from center */}
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
              style={{ width: item.size, height: item.size }}
              initial={{ scale: 0, opacity: 0, x, y }}
              animate={{ scale: 1, opacity: 0.95, x, y }}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 20,
                delay: 0.2 + i * BLOOM_STAGGER,
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
      {/* Surprise!!! headline */}
      <motion.p
        className="relative z-10 font-display text-4xl sm:text-5xl md:text-6xl text-white text-center drop-shadow-2xl px-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 18,
          delay: 0.5,
        }}
      >
        Surprise!!!
      </motion.p>
    </div>
  );
}
