import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        lightblue: "#0074d9",
        pink: "#d90074",
        "black-1": "#0E1217",
        "black-2": "#1C1F26"
      }
    }
  },
  plugins: []
}
export default config
