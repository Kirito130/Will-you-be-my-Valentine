"use client";

import { useEffect, useState, useRef } from "react";
import { getRemainingMs, formatRemaining } from "@/lib/ist-countdown";

const TICK_MS = 1000;

/**
 * Displays countdown to 8 PM IST in "X hrs : Y min : Z sec" format.
 * Updates every second. Calls onZero when remaining ms reaches 0.
 */
export function Page6Countdown({ onZero }: { onZero: () => void }) {
  const [formatted, setFormatted] = useState(() => formatRemaining(getRemainingMs()));
  const onZeroRef = useRef(onZero);
  onZeroRef.current = onZero;

  useEffect(() => {
    const id = setInterval(() => {
      const ms = getRemainingMs();
      setFormatted(formatRemaining(ms));
      if (ms <= 0) {
        clearInterval(id);
        onZeroRef.current();
      }
    }, TICK_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums font-semibold whitespace-nowrap" aria-live="polite">
      {formatted}
    </span>
  );
}
