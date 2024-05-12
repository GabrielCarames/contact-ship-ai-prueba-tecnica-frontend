import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer>
      <p className="text-white flex text-sm items-center text-center">
        Hecho por
        <Link
          href="https://www.linkedin.com/in/gabrielcarames/"
          target="_blank"
          className="ml-1 flex items-center gap-1 hover:text-darkviolet"
        >
          <Image
            src="/media/linkedin-logo.webp"
            alt="Logo de LinkedIn"
            width={20}
            height={20}
            className="mx-1"
          />
          Gabriel Caramés
        </Link>
      </p>
    </footer>
  )
}
