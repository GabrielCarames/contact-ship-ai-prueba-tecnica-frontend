"use client"
import Transcription from "@/components/Transcription"
import transcription from "../utils/transcription.json"
import { useEffect, useRef } from "react"
import { TranscriptionJSONProps } from "@/types"

export default function AudioWithTranscription() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const contentRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const currentAudioRef = audioRef.current
    const currentContentRef = contentRef.current
    if (!currentAudioRef || !currentContentRef) return
    const onTimeUpdate = () => {
      const activeContentIndex = transcription.findIndex(content => {
        return (
          currentAudioRef.currentTime > content.start &&
          currentAudioRef.currentTime < content.end
        )
      })
      if (activeContentIndex === -1) return
      if (activeContentIndex > 0) {
        const prevContentElement = currentContentRef.childNodes[
          activeContentIndex - 1
        ] as HTMLLIElement
        prevContentElement?.classList?.remove("active-content")
      }
      const contentElement = currentContentRef.childNodes[
        activeContentIndex
      ] as HTMLLIElement
      contentElement?.classList?.add("active-content")
    }
    if (currentAudioRef) {
      currentAudioRef.addEventListener("timeupdate", onTimeUpdate)
      return () => {
        currentAudioRef!.removeEventListener("timeupdate", onTimeUpdate)
      }
    }
  }, [])

  return (
    <section className="flex flex-col gap-10 bg-black-2 p-5 rounded-xl border border-slate-700">
      <Transcription
        transcription={transcription as TranscriptionJSONProps[]}
        audioRef={audioRef}
        contentRef={contentRef}
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
