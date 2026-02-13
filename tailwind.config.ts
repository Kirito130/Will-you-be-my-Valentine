import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        valentine: {
          rose: "#e11d48",
          pink: "#f472b6",
          blush: "#fce7f3",
          cream: "#fff1f2",
          deep: "#9f1239",
          /** Page background - soft pink (#F6BBCF) */
          page: "#F6BBCF",
          /** Landing Page 2 background (#E12D36) */
          page2: "#E12D36",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-display)", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "shake": "shake 0.5s ease-in-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-6px)" },
          "75%": { transform: "translateX(6px)" },
        },
      },
      backgroundImage: {
        "gradient-romantic": "linear-gradient(135deg, #fce7f3 0%, #fbcfe8 50%, #f9a8d4 100%)",
        "gradient-deep": "linear-gradient(180deg, #9f1239 0%, #e11d48 50%, #f472b6 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
