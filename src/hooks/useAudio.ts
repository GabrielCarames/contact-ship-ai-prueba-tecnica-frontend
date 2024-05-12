import {
  PlayFromTimeProps,
  ToggleActiveContentProps,
  TranscriptionJSONProps
} from "@/types"
import { useEffect, useRef, useState } from "react"

const useAudio = ({
  transcription
}: {
  transcription: TranscriptionJSONProps[]
}) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const contentRef = useRef<HTMLUListElement>(null)

  const handleActiveContent = ({
    contentIndexToActivate,
    currentContentRef
  }: ToggleActiveContentProps) => {
    const currentActiveContent = currentContentRef.querySelector(
      ".active-content"
    ) as HTMLLIElement
    currentActiveContent?.classList?.remove("active-content")
    const contentElement = currentContentRef.childNodes[
      contentIndexToActivate
    ] as HTMLLIElement
    contentElement?.classList?.add("active-content")
  }

  const getContentIndexToActivate = ({
    currentAudioRef
  }: {
    currentAudioRef: HTMLAudioElement
  }) =>
    transcription.findIndex(content => {
      return (
        currentAudioRef.currentTime >= content.start &&
        currentAudioRef.currentTime <= content.end
      )
    })

  useEffect(() => {
    const currentAudioRef = audioRef.current
    const currentContentRef = contentRef.current
    if (!currentAudioRef || !currentContentRef) return
    const onTimeUpdate = () => {
      const contentIndexToActivate = getContentIndexToActivate({
        currentAudioRef
      })
      handleActiveContent({ contentIndexToActivate, currentContentRef })
      scrollToContent(currentAudioRef)
    }
    if (currentAudioRef) {
      currentAudioRef.addEventListener("timeupdate", onTimeUpdate)
      return () => {
        currentAudioRef!.removeEventListener("timeupdate", onTimeUpdate)
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const scrollToContent = (currentAudioRef: HTMLAudioElement) => {
    const contentIndexToActivate = getContentIndexToActivate({
      currentAudioRef
    })
    const contentElement = contentRef.current?.childNodes[
      contentIndexToActivate
    ] as HTMLLIElement
    contentElement?.scrollIntoView({ behavior: "smooth" })
  }

  const playFromTime = ({ currentTime }: PlayFromTimeProps) => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime
      audioRef.current.play()
      setIsPlaying(true)
      scrollToContent(audioRef.current)
    }
  }

  return { audioRef, contentRef, playFromTime, isPlaying, setIsPlaying }
}

export default useAudio
