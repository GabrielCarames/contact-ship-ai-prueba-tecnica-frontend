"use client"
import Transcription from "@/components/Transcription"
import transcription from "../utils/transcription.json"
import { TranscriptionJSONProps } from "@/types"
import useAudio from "@/hooks/useAudio"

export default function AudioWithTranscription() {
  const { audioRef, contentRef, playFromTime } = useAudio({
    transcription: transcription as TranscriptionJSONProps[]
  })

  return (
    <section className="flex flex-col gap-10 bg-black-2 p-5 rounded-xl border border-slate-700">
      <Transcription
        transcription={transcription as TranscriptionJSONProps[]}
        contentRef={contentRef}
        playFromTime={playFromTime}
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
