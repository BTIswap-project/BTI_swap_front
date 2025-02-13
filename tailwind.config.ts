import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-green': '0px -1px 29.1px 0px rgba(28, 248, 0, 0.25)', // Adjusted RGBA for #1CF80040
        'custom-black': '0px 6px 14.1px 6px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          default: "#1CF800"
        },
        warning: {
          default: "#8A4200",
          light: "#F8C100"
        },
        gray: {
          default: "#3C3C3C",
          light: "#989898",
          dark: "#191818",
          dark2: "#1C1C1C",
          1: "#F9FAFB",
          2: "#F3F4F6",
          3: "#E5E7EB",
          4: "#D1D5DB",
          5: "#9CA3AF",
          6: "#6B7280",
          7: "#374151",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
