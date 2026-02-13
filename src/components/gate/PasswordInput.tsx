"use client";

import { motion, AnimatePresence } from "framer-motion";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  error: boolean;
  onErrorShakeEnd?: () => void;
  disabled?: boolean;
}

/**
 * Password input with label, submit on Enter, and optional shake on error.
 * Accessible: aria-label and visible focus ring.
 */
export function PasswordInput({
  value,
  onChange,
  onSubmit,
  error,
  onErrorShakeEnd,
  disabled = false,
}: PasswordInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="w-full max-w-xs mx-auto">
      <motion.div
        animate={error ? { x: [0, -8, 8, -6, 6, 0] } : {}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onAnimationComplete={error ? onErrorShakeEnd : undefined}
      >
        <label htmlFor="gate-password" className="sr-only">
          Enter the secret answer
        </label>
        <input
          id="gate-password"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          placeholder="Type your answer here..."
          className="w-full px-4 py-3.5 rounded-2xl border-2 border-valentine-pink/60 bg-white/90 text-valentine-deep text-base sm:text-lg placeholder-valentine-pink/60 focus:border-valentine-rose focus:ring-2 focus:ring-valentine-rose/30 outline-none transition-all duration-300"
          aria-label="Secret password"
          aria-invalid={error}
          aria-describedby={error ? "gate-error" : undefined}
          autoComplete="off"
        />
      </motion.div>
      <AnimatePresence mode="wait">
        {error && (
          <motion.p
            id="gate-error"
            role="alert"
            className="mt-3 text-center text-valentine-rose font-medium"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            Nice Try Evil Dino 😛
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
