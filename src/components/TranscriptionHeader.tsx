import useThemeSwitcher from "@/hooks/useThemeSwitcher"

export default function TranscriptionHeader() {
  const { handleChangeTheme, theme } = useThemeSwitcher()

  return (
    <header className="border-b border-b-slate-300 dark:border-b-slate-700 w-full flex justify-center relative items-center h-16">
      <h3 className="text-center font-bold text-sm sm:text-base">
        Transcripción
      </h3>
      <button
        className="absolute right-0 mt-auto border-4 border-mediumslateblue rounded-full bg-transparent p-2 flex justify-center items-center hover:bg-mediumslateblue group duration-300"
        onClick={handleChangeTheme}
      >
        {theme === "dark" ? (
          <span className="icon-[ic--sharp-wb-sunny] bg-white size-5 sm:size-6 group-hover:bg-black" />
        ) : (
          <span className="icon-[ic--baseline-mode-night] bg-black  size-5 sm:size-6 group-hover:bg-white" />
        )}
      </button>
    </header>
  )
}
