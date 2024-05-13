import { useEffect, useState } from "react"

const defaultTheme = () => {
  if (typeof window === "undefined") return "light"
  const theme = localStorage.getItem("theme")
  if (theme) {
    return theme
  }
  const userPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
  return userPrefersDark ? "dark" : "light"
}

const useThemeSwitcher = () => {
  const [theme, setTheme] = useState(defaultTheme)
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  const handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return { handleChangeTheme, theme }
}
export default useThemeSwitcher
