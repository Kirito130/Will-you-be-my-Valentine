"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import confetti from "canvas-confetti";
import { assets } from "@/lib/assets";
import { SURPRISE_HEADLINE } from "@/lib/page5-text";

/**
 * Intro assets: fixed positions in a loose ring around center.
 * One-time "bloom" scale-in (no continuous float/orbit)—distinct from other pages.
 */
const INTRO_ASSETS = [
  { src: assets.twoHearts, size: 56, left: "12%", top: "18%" },
  { src: assets.heartWithWingsFront, size: 52, left: "78%", top: "14%" },
  { src: assets.heartWithLove, size: 58, left: "8%", top: "52%" },
  { src: assets.gift, size: 50, left: "82%", top: "48%" },
  { src: assets.cuteDino, size: 64, left: "6%", top: "78%" },
  { src: assets.ring, size: 44, left: "80%", top: "76%" },
  { src: assets.heartWithArrow, size: 48, left: "22%", top: "8%" },
  { src: assets.envelopeFront, size: 46, left: "72%", top: "82%" },
  { src: assets.iLoveYou1, size: 54, left: "88%", top: "32%" },
  { src: assets.chocolateFront, size: 44, left: "14%", top: "82%" },
  { src: assets.heartLock, size: 42, left: "76%", top: "22%" },
  { src: assets.handWithLove, size: 48, left: "28%", top: "88%" },
];

const STAGGER_CHILDREN = 0.06;
const BLOOM_DURATION = 0.55;

/**
 * Scene 1: Bloom intro — assets scale in from center (one-time pop), then headline.
 * Uses Landing page 1 background; no continuous motion.
 */
export function Page5Intro() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden>
      <motion.div
        className="absolute inset-0"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: STAGGER_CHILDREN,
              delayChildren: 0.15,
            },
          },
          hidden: {},
        }}
      >
        {INTRO_ASSETS.map((item, i) => (
          <motion.div
            key={i}
            className="absolute opacity-90 drop-shadow-lg"
            style={{
              left: item.left,
              top: item.top,
              width: item.size,
              height: item.size,
            }}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 0.9,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: BLOOM_DURATION,
                },
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
      </motion.div>
    </div>
  );
}

const HEADLINE_DELAY_MS = 900;

/**
 * Headline shown after/during bloom: "I am your surprise!" — confetti pops when it appears.
 */
export function SurpriseHeadline() {
  useEffect(() => {
    const reducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => {
      if (reducedMotion) return;
      const colors = ["#fff", "#fce7f3", "#f472b6", "#e11d48", "#fbbf24"];
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors,
      });
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0.2, y: 0.7 },
        colors,
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 0.8, y: 0.7 },
        colors,
      });
    }, HEADLINE_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.h1
      className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg text-center px-4"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.9, duration: 0.5, type: "spring", stiffness: 200, damping: 22 }}
    >
      {SURPRISE_HEADLINE}
    </motion.h1>
  );
}
