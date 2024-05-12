"use client"
import Transcription from "@/components/Transcription"
import transcription from "../utils/transcription.json"
import { TranscriptionJSONProps } from "@/types"
import useAudio from "@/hooks/useAudio"

import CustomAudioPlayer from "./CustomAudioPlayer"
export default function AudioWithTranscription() {
  const { audioRef, contentRef, playFromTime, isPlaying, setIsPlaying } =
    useAudio({
      transcription: transcription as TranscriptionJSONProps[]
    })

  return (
    <section className="flex flex-col bg-shark p-5 pt-0 rounded-xl border border-slate-700">
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
