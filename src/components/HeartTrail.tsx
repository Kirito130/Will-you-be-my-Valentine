"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const THROTTLE_MS = 60;
const FADE_DURATION = 2.5;
const MAX_HEARTS = 28;
const HEART_SIZE = 18;

/**
 * Single heart in the trail: small SVG heart that fades out and is then removed.
 */
function TrailHeart({
  id,
  x,
  y,
  onComplete,
}: {
  id: number;
  x: number;
  y: number;
  onComplete: (id: number) => void;
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        width: HEART_SIZE,
        height: HEART_SIZE,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0.9, scale: 0.8 }}
      animate={{ opacity: 0, scale: 1.1 }}
      transition={{
        duration: FADE_DURATION,
        ease: "easeOut",
      }}
      onAnimationComplete={() => onComplete(id)}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-full h-full drop-shadow-sm"
        aria-hidden
      >
        <path
          fill="#e63950"
          stroke="#1a0a0a"
          strokeWidth="1"
          strokeLinejoin="round"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    </motion.div>
  );
}

/**
 * Renders a short trail of hearts that follow the mouse and fade out over 2–3 seconds.
 * Shown on all pages; respects prefers-reduced-motion.
 */
export function HeartTrail() {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const [reducedMotion, setReducedMotion] = useState(false);
  const lastMoveRef = useRef(0);
  const idRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const addHeart = useCallback((clientX: number, clientY: number) => {
    const id = ++idRef.current;
    setHearts((prev) => {
      const next = [...prev, { id, x: clientX, y: clientY }];
      if (next.length > MAX_HEARTS) return next.slice(-MAX_HEARTS);
      return next;
    });
  }, []);

  const removeHeart = useCallback((id: number) => {
    setHearts((prev) => prev.filter((h) => h.id !== id));
  }, []);

  useEffect(() => {
    if (reducedMotion) return;

    const handleMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMoveRef.current < THROTTLE_MS) return;
      lastMoveRef.current = now;
      addHeart(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reducedMotion, addHeart]);

  if (reducedMotion) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden
    >
      {hearts.map((h) => (
        <TrailHeart
          key={h.id}
          id={h.id}
          x={h.x}
          y={h.y}
          onComplete={removeHeart}
        />
      ))}
    </div>
  );
}
