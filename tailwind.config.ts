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
        // lightblue: "#0074d9",
        // pink: "#d90074",
        bunker: "#0E1217",
        shark: "#1C1F26",
        mediumslateblue: "#0074d9",
        darkviolet: "#ab09f6",
        orange: "#f6ab09"
      }
    }
  },
  plugins: []
}
export default config
