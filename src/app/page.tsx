import AudioWithTranscription from "@/components/AudioWithTranscription"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function HomePage() {
  return (
    <main className="w-full bg-white dark:bg-bunker min-h-screen flex justify-center items-center flex-col gap-10 p-2 py-6">
      <Header />
      <AudioWithTranscription />
      <Footer />
    </main>
  )
}
