"use client"
import { useTheme } from "next-themes"

const useThemeSwitcher = () => {
  const { theme, setTheme, systemTheme } = useTheme()

  const currentTheme = theme === "system" ? systemTheme : theme

  return { setTheme, currentTheme }
}

export default useThemeSwitcher
