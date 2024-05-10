"use client"
import Transcription from "@/components/Transcription"
import transcription from "../utils/transcription.json"
import { useRef } from "react"

export default function HomePage() {
  const audioRef = useRef<HTMLAudioElement>(null)

  return (
    <div className="w-full bg-gray-900 h-screen flex justify-center items-center gap-10">
      <audio ref={audioRef} src="/media/test-call.wav" controls />
      <Transcription transcription={transcription} audioRef={audioRef} />
    </div>
  )
}
