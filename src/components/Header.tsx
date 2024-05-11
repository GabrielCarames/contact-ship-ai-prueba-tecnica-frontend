import Image from "next/image"

export default function Header() {
  return (
    <header className="text-white flex flex-col gap-5 text-center">
      <div className="flex gap-5 items-center self-center">
        <Image
          src="/media/contact-ship-ai-logo.webp"
          alt="Logo de ContactShip AI"
          className="size-10 sm:size-12"
          width={50}
          height={50}
        />
        <h1 className="text-2xl sm:text-3xl font-bold">ContactShip AI</h1>
      </div>
      <h2 className="text-base sm:text-2xl">
        Prueba técnica desarrollador front-end
      </h2>
    </header>
  )
}
