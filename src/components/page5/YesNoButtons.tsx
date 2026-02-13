"use client";

import { useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface YesNoButtonsProps {
  onYes: () => void;
  sectionRef: React.RefObject<HTMLDivElement | null>;
}

const EDGE_MARGIN_PX = 24;
const PADDING_AROUND_FORBIDDEN_PX = 16;
const MAX_ATTEMPTS = 25;
const HOVER_DISAPPEAR_COUNT = 7;

/**
 * Returns true if rect A overlaps rect B with optional padding.
 */
function overlaps(
  ax: number,
  ay: number,
  aw: number,
  ah: number,
  bx: number,
  by: number,
  bw: number,
  bh: number,
  padding: number
): boolean {
  return (
    ax - padding < bx + bw &&
    ax + aw + padding > bx &&
    ay - padding < by + bh &&
    ay + ah + padding > by
  );
}

/**
 * Yes button (clickable) and No button (unclickable, evades on hover).
 * Initial state: both buttons aligned in a row. On hover, No moves to a random safe position
 * (not over the question text or Yes button, not cut off at edges). After 7 hovers, No disappears.
 */
export function YesNoButtons({ onYes, sectionRef }: YesNoButtonsProps) {
  const yesRef = useRef<HTMLButtonElement>(null);
  const noRef = useRef<HTMLButtonElement>(null);
  const [noFloating, setNoFloating] = useState(false);
  const [noPosition, setNoPosition] = useState<{ left: number; top: number } | null>(null);
  const [hoverCount, setHoverCount] = useState(0);
  const [noVisible, setNoVisible] = useState(true);

  const moveNo = useCallback(() => {
    const noEl = noRef.current;
    const yesEl = yesRef.current;
    const section = sectionRef.current;
    if (!noEl || !section) return;

    const noRect = noEl.getBoundingClientRect();
    const w = noRect.width;
    const h = noRect.height;

    let questionRect = { x: 0, y: 0, width: 0, height: 0 };
    let yesRect = { x: 0, y: 0, width: 0, height: 0 };

    const questionEl = section.querySelector("p");
    if (questionEl) {
      const q = questionEl.getBoundingClientRect();
      questionRect = { x: q.left, y: q.top, width: q.width, height: q.height };
    }
    if (yesEl) {
      const y = yesEl.getBoundingClientRect();
      yesRect = { x: y.left, y: y.top, width: y.width, height: y.height };
    }

    const minLeft = EDGE_MARGIN_PX;
    const maxLeft = window.innerWidth - w - EDGE_MARGIN_PX;
    const minTop = EDGE_MARGIN_PX;
    const maxTop = window.innerHeight - h - EDGE_MARGIN_PX;

    for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
      const left = minLeft + Math.random() * Math.max(0, maxLeft - minLeft);
      const top = minTop + Math.random() * Math.max(0, maxTop - minTop);

      const noLeft = left;
      const noTop = top;

      if (
        overlaps(
          noLeft,
          noTop,
          w,
          h,
          questionRect.x,
          questionRect.y,
          questionRect.width,
          questionRect.height,
          PADDING_AROUND_FORBIDDEN_PX
        )
      )
        continue;
      if (
        overlaps(
          noLeft,
          noTop,
          w,
          h,
          yesRect.x,
          yesRect.y,
          yesRect.width,
          yesRect.height,
          PADDING_AROUND_FORBIDDEN_PX
        )
      )
        continue;

      setNoPosition({ left: noLeft + w / 2, top: noTop + h / 2 });
      setNoFloating(true);
      setHoverCount((c) => {
        const next = c + 1;
        if (next >= HOVER_DISAPPEAR_COUNT) {
          setTimeout(() => setNoVisible(false), 200);
        }
        return next;
      });
      return;
    }

    setNoFloating(true);
    setNoPosition({ left: window.innerWidth / 2, top: window.innerHeight / 2 });
    setHoverCount((c) => {
      const next = c + 1;
      if (next >= HOVER_DISAPPEAR_COUNT) setTimeout(() => setNoVisible(false), 200);
      return next;
    });
  }, [sectionRef]);

  return (
    <div className="flex justify-center items-center gap-6 mt-8 relative min-h-[4rem]">
      <motion.button
        ref={yesRef}
        type="button"
        onClick={onYes}
        className="px-10 py-5 rounded-2xl font-display text-2xl sm:text-3xl text-white bg-white/25 backdrop-blur border-2 border-white/60 hover:bg-white/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page transition-colors shadow-lg shrink-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        Yes!
      </motion.button>

      {noVisible && !noFloating && (
        <motion.button
          ref={noRef}
          type="button"
          aria-disabled="true"
          tabIndex={-1}
          className="px-10 py-5 rounded-2xl font-display text-2xl sm:text-3xl text-white/80 bg-white/15 backdrop-blur border-2 border-white/40 cursor-default select-none shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          onMouseEnter={moveNo}
          onMouseMove={(e) => {
            const el = noRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            if (Math.hypot(e.clientX - cx, e.clientY - cy) < 80) moveNo();
          }}
          onFocus={moveNo}
        >
          No
        </motion.button>
      )}

      <AnimatePresence>
        {noVisible && noFloating && noPosition && (
          <motion.button
            ref={noRef}
            key="floating-no"
            type="button"
            aria-disabled="true"
            tabIndex={-1}
            className="fixed px-10 py-5 rounded-2xl font-display text-2xl sm:text-3xl text-white/80 bg-white/15 backdrop-blur border-2 border-white/40 cursor-default select-none -translate-x-1/2 -translate-y-1/2 z-30 shrink-0"
            style={{
              left: noPosition.left,
              top: noPosition.top,
            }}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            onMouseEnter={moveNo}
            onMouseMove={(e) => {
              const el = noRef.current;
              if (!el) return;
              const rect = el.getBoundingClientRect();
              const cx = rect.left + rect.width / 2;
              const cy = rect.top + rect.height / 2;
              if (Math.hypot(e.clientX - cx, e.clientY - cy) < 80) moveNo();
            }}
            onFocus={moveNo}
          >
            No
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
