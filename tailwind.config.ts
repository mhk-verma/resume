import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F7FB",
        surface: "#FFFFFF",
        primary: "#173B73",
        "royal-blue": "#356AE6",
        indigo: "#6D72E8",
        "main-text": "#172033",
        "muted-text": "#667085",
        border: "#DCE3EF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
export default config
