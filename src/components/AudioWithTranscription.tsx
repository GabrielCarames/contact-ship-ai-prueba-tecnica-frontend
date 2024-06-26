"use client"
import Transcription from "@/components/Transcription"
import transcription from "../utils/transcription.json"
import { TranscriptionJSONProps } from "@/types"
import useAudio from "@/hooks/useAudio"
import dynamic from "next/dynamic"
const CustomAudioPlayer = dynamic(() => import("./CustomAudioPlayer"), {
  ssr: false
})

export default function AudioWithTranscription() {
  const { audioRef, contentRef, playFromTime, isPlaying, setIsPlaying } =
    useAudio({
      transcription: transcription as TranscriptionJSONProps[]
    })

  return (
    <section className="flex flex-col bg-white dark:bg-shark p-5 pt-0 rounded-xl border border-slate-300 dark:border-slate-700">
      <Transcription
        transcription={transcription as TranscriptionJSONProps[]}
        contentRef={contentRef}
        playFromTime={playFromTime}
      />
      <CustomAudioPlayer
        src={"/media/test-call.wav"}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
    </section>
  )
}
