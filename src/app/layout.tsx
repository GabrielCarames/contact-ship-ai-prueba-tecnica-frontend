import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ContactShip AI",
  description: "Prueba técnica desarrollador front-end para ContactShip AI."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
