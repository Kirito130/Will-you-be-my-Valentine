"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

/** Romantic colors for the confetti pop (hearts/Valentine vibe). */
const COLORS = ["#ff6b9d", "#c44569", "#f8b500", "#ff9ff3", "#f368e0", "#ffcccc", "#e84393"];

/**
 * Fires a smooth confetti burst from the center when the question + buttons appear.
 * Single burst (no continuous rain) for a clean "pop" entry. Respects reduced motion.
 */
export function FlowersHeartsExplosion({
  active,
  reducedMotion = false,
}: {
  active: boolean;
  reducedMotion?: boolean;
}) {
  const firedRef = useRef(false);

  useEffect(() => {
    if (!active || reducedMotion || firedRef.current) return;
    firedRef.current = true;

    const origin = { x: 0.5, y: 0.5 };

    // Main burst from center — smooth pop with good spread and velocity
    confetti({
      particleCount: 100,
      spread: 100,
      origin,
      startVelocity: 28,
      colors: COLORS,
      ticks: 200,
      gravity: 0.8,
      scalar: 1.1,
      drift: 0.2,
    });

    // Slight stagger for a fuller, softer burst
    const t1 = setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 80,
        origin,
        startVelocity: 22,
        colors: COLORS,
        ticks: 180,
        gravity: 0.75,
        scalar: 0.95,
      });
    }, 80);
    const t2 = setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 120,
        origin,
        startVelocity: 18,
        angle: 90,
        colors: COLORS,
        ticks: 160,
        gravity: 0.7,
      });
    }, 160);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active, reducedMotion]);

  return null;
}
