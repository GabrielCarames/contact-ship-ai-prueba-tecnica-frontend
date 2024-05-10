import {
  PlayFromTimeProps,
  ToggleActiveContentProps,
  TranscriptionJSONProps
} from "@/types"
import { useEffect, useRef } from "react"

const useAudio = ({
  transcription
}: {
  transcription: TranscriptionJSONProps[]
}) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const contentRef = useRef<HTMLUListElement>(null)

  const toggleActiveContent = ({
    activeContentIndex,
    currentContentRef
  }: ToggleActiveContentProps) => {
    if (activeContentIndex === -1) return
    const contentElement = currentContentRef.childNodes[
      activeContentIndex
    ] as HTMLLIElement
    if (activeContentIndex > 0) {
      const prevContentElement = currentContentRef.childNodes[
        activeContentIndex - 1
      ] as HTMLLIElement
      prevContentElement?.classList?.remove("active-content")
    }
    contentElement?.classList?.add("active-content")
  }

  const getActiveContentIndex = ({
    currentAudioRef
  }: {
    currentAudioRef: HTMLAudioElement
  }) =>
    transcription.findIndex(content => {
      return (
        currentAudioRef.currentTime > content.start &&
        currentAudioRef.currentTime < content.end
      )
    })

  useEffect(() => {
    const currentAudioRef = audioRef.current
    const currentContentRef = contentRef.current
    if (!currentAudioRef || !currentContentRef) return
    const onTimeUpdate = () => {
      const activeContentIndex = getActiveContentIndex({ currentAudioRef })
      if (activeContentIndex === -1) return
      toggleActiveContent({ activeContentIndex, currentContentRef })
    }
    if (currentAudioRef) {
      currentAudioRef.addEventListener("timeupdate", onTimeUpdate)
      return () => {
        currentAudioRef!.removeEventListener("timeupdate", onTimeUpdate)
      }
    }
  }, [])

  const playFromTime = ({ currentTime }: PlayFromTimeProps) => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime
      audioRef.current.play()
    }
  }

  return { audioRef, contentRef, playFromTime }
}

export default useAudio
