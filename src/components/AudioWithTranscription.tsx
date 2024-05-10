"use client"
import Transcription from "@/components/Transcription"
import transcription from "../utils/transcription.json"
import { useRef } from "react"
import { TranscriptionJSONProps } from "@/types"

export default function AudioWithTranscription() {
  const audioRef = useRef<HTMLAudioElement>(null)

  return (
    <section className="flex flex-col gap-10 bg-black-2 p-5 rounded-xl">
      <Transcription
        transcription={transcription as TranscriptionJSONProps[]}
        audioRef={audioRef}
      />
      <audio
        className="w-full"
        ref={audioRef}
        src="/media/test-call.wav"
        controls
      />
    </section>
  )
}
