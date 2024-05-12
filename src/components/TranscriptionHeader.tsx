import useThemeSwitcher from "@/hooks/useThemeSwitcher"

export default function TranscriptionHeader() {
  const { handleChangeTheme, theme } = useThemeSwitcher()

  return (
    <header className="border-b border-b-slate-700 w-full flex justify-center relative items-center h-16">
      <h3 className="text-center text-white font-bold text-sm sm:text-base">
        Transcripción
      </h3>
      <button
        className="absolute right-0 mt-auto border-4 border-mediumslateblue rounded-full bg-transparent p-2 flex justify-center items-center"
        onClick={handleChangeTheme}
      >
        {theme === "dark" ? (
          <span className="icon-[ic--outline-wb-sunny] bg-white size-6" />
        ) : (
          <span className="icon-[ic--outline-mode-night] bg-white size-6" />
        )}
      </button>
    </header>
  )
}
