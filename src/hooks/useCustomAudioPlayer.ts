import { CustomAudioPlayerProps } from "@/types"
import { ReactEventHandler, useEffect, useState } from "react"

const useCustomAudioPlayer = ({
  audioRef,
  isPlaying,
  setIsPlaying
}: CustomAudioPlayerProps) => {
  const [isReady, setIsReady] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currrentProgress, setCurrrentProgress] = useState(0)
  const [buffered, setBuffered] = useState(0)
  const [volume, setVolume] = useState(0.2)

  const formatDurationDisplay = (duration: number) => {
    const min = Math.floor(duration / 60)
    const sec = Math.floor(duration - min * 60)
    const formatted = [min, sec].map(n => (n < 10 ? "0" + n : n)).join(":")
    return formatted
  }
  const durationDisplay = formatDurationDisplay(duration)
  const elapsedDisplay = formatDurationDisplay(currrentProgress)

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause()
      setIsPlaying(false)
    } else {
      audioRef.current?.play()
      setIsPlaying(true)
    }
  }

  const handleBufferProgress: ReactEventHandler<HTMLAudioElement> = e => {
    const audio = e.currentTarget
    const dur = audio.duration
    if (dur > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          const bufferedLength = audio.buffered.end(
            audio.buffered.length - 1 - i
          )
          setBuffered(bufferedLength)
          break
        }
      }
    }
  }

  const handleMuteUnmute = () => {
    if (!audioRef.current) return
    if (audioRef.current.volume !== 0) {
      audioRef.current.volume = 0
    } else {
      audioRef.current.volume = 1
    }
  }

  const handleVolumeChange = (volumeValue: number) => {
    if (!audioRef.current) return
    audioRef.current.volume = volumeValue
    setVolume(volumeValue)
  }

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return
    audioRef.current.currentTime = e.currentTarget.valueAsNumber
    setCurrrentProgress(e.currentTarget.valueAsNumber)
  }
  const handleDurationChange = () => {
    if (!audioRef.current) return
    const seconds = Math.floor(audioRef.current.duration)
    setDuration(seconds)
    setIsReady(true)
  }

  return {
    isReady,
    duration,
    currrentProgress,
    buffered,
    volume,
    isPlaying,
    durationDisplay,
    elapsedDisplay,
    togglePlayPause,
    handleBufferProgress,
    handleMuteUnmute,
    handleVolumeChange,
    handleAudioChange,
    setCurrrentProgress,
    setVolume,
    currentAudioRef: audioRef,
    handleDurationChange
  }
}

export default useCustomAudioPlayer
