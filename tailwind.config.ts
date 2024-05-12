import type { Config } from "tailwindcss"
const { addDynamicIconSelectors } = require("@iconify/tailwind")

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        bunker: "#0E1217",
        shark: "#1C1F26",
        mediumslateblue: "#0074d9",
        blue: "#3509f6",
        darkviolet: "#ab09f6",
        orange: "#f6ab09",
        mercury: "#e3e5ec"
      }
    }
  },
  plugins: [addDynamicIconSelectors(), require("tailwind-scrollbar")]
}
export default config
