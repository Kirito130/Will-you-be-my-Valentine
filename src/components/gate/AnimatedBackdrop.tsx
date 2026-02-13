"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { assets } from "@/lib/assets";

/**
 * Animated background for the Gate Page: gradient + floating hearts/assets
 * for a romantic, playful feel. Respects prefers-reduced-motion.
 */
export function AnimatedBackdrop() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Animated gradient background - base #F6BBCF (valentine-page) */}
      <motion.div
        className="absolute inset-0 bg-valentine-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      {/* Subtle moving gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(244, 114, 182, 0.4), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(225, 29, 72, 0.2), transparent)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Floating decorative hearts - larger and more visible */}
      <motion.div
        className="absolute top-[12%] left-[8%] w-28 h-28 opacity-85"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={assets.twoHearts}
          alt=""
          width={112}
          height={112}
          className="object-contain drop-shadow-lg"
        />
      </motion.div>
      <motion.div
        className="absolute top-[22%] right-[12%] w-24 h-24 opacity-80"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Image
          src={assets.heartWithWingsFront}
          alt=""
          width={96}
          height={96}
          className="object-contain drop-shadow-lg"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[18%] left-[12%] w-28 h-28 opacity-82"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Image
          src={assets.heartWithLove}
          alt=""
          width={104}
          height={104}
          className="object-contain drop-shadow-lg"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[28%] right-[8%] w-24 h-24 opacity-78"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      >
        <Image
          src={assets.heartWithArrow}
          alt=""
          width={96}
          height={96}
          className="object-contain drop-shadow-lg"
        />
      </motion.div>
    </div>
  );
}
