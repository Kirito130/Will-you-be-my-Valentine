"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type { LastChoicePage2 } from "@/lib/valentines-store";

interface ChoiceButtonsProps {
  onChoice: (choice: LastChoicePage2) => void;
}

/**
 * Two CTA buttons that record the user's choice and navigate to /page-3.
 * "Yes, I am in" -> yes; "Hell yeah, I am innn!!!" -> hell.
 */
export function ChoiceButtons({ onChoice }: ChoiceButtonsProps) {
  const router = useRouter();

  const handleClick = (choice: LastChoicePage2) => {
    onChoice(choice);
    router.push("/page-3");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-8">
      <motion.button
        type="button"
        onClick={() => handleClick("yes")}
        className="px-10 py-5 rounded-2xl font-display text-xl sm:text-2xl md:text-3xl text-white bg-white/20 backdrop-blur border-2 border-white/60 hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page2 transition-colors"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Yes, I am in
      </motion.button>
      <motion.button
        type="button"
        onClick={() => handleClick("hell")}
        className="px-10 py-5 rounded-2xl font-display text-xl sm:text-2xl md:text-3xl text-white bg-white/25 backdrop-blur border-2 border-white/70 hover:bg-white/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-valentine-page2 transition-colors"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        Hell yeah, I am innn!!!
      </motion.button>
    </div>
  );
}
