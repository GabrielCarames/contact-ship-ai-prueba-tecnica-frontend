import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex justify-center items-center h-full min-h-screen bg-white dark:bg-shark px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-2xl md:text-5xl font-semibold text-red-500">404</p>
        <h1 className="mt-4 text-xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          Página no encontrada
        </h1>
        <p className="mt-6 text-sm md:text-base leading-7 text-gray-600 dark:text-slate-200">
          La página que estás buscando no existe o fue removida.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            className="inline-flex items-center justify-center rounded-xl py-4 px-6 text-center font-bold text-black dark:text-white text-sm lg:text-base lg:px-8 xl:px-10 duration-200 border-4 border-mediumslateblue hover:bg-mediumslateblue hover:text-white hover:dark:text-black"
            href={"/"}
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  )
}
