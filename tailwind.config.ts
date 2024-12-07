import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'], // Poppins font
        inter: ['var(--font-inter)', 'sans-serif'],     // Inter font
      },
      letterSpacing: {
        wider: '3%' // 3% letter spacing
      }
    },
  },
  plugins: [],
} satisfies Config;
