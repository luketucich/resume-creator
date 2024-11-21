/** @type {import('tailwindcss').Config} */
import scrollbar from "tailwind-scrollbar";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 8px rgba(255, 255, 255, 0.35)",
          "0 0px 20px rgba(255, 255, 255, 0.2)",
        ],
      },
    },
  },
  plugins: [scrollbar],
};
