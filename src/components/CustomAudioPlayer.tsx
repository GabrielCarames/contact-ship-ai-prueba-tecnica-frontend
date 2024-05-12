import { ReactEventHandler, useEffect, useState } from "react"
import AudioProgressBar from "./customAudioPlayer/AudioProgressBar"
import IconButton from "./customAudioPlayer/IconButton"
import VolumeInput from "./customAudioPlayer/VolumeInput"
import { Icon } from "@iconify/react/dist/iconify.js"
import { AudioPlayerProps } from "@/types"

const formatDurationDisplay = (duration: number) => {
  const min = Math.floor(duration / 60)
  const sec = Math.floor(duration - min * 60)
  const formatted = [min, sec].map(n => (n < 10 ? "0" + n : n)).join(":")
  return formatted
}

export default function CustomAudioPlayer({ src, audioRef }: AudioPlayerProps) {
  const [isReady, setIsReady] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currrentProgress, setCurrrentProgress] = useState(0)
  const [buffered, setBuffered] = useState(0)
  const [volume, setVolume] = useState(0.2)
  const [isPlaying, setIsPlaying] = useState(false)

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

  useEffect(() => {
    if (!audioRef.current) return
    const seconds = Math.floor(audioRef.current.duration)
    setDuration(seconds)
    setIsReady(true)
  }, [])

  return (
    <div className="border-t border-t-slate-700 pt-5">
      <div className="bg-dark-1 text-slate-400 relative">
        <audio
          ref={audioRef}
          preload="metadata"
          autoPlay={false}
          onTimeUpdate={e => {
            setCurrrentProgress(e.currentTarget.currentTime)
            handleBufferProgress(e)
          }}
          onProgress={handleBufferProgress}
          onVolumeChange={e => setVolume(e.currentTarget.volume)}
        >
          <source type="audio/mpeg" src={src} />
        </audio>
        <AudioProgressBar
          duration={duration}
          currentProgress={currrentProgress}
          buffered={buffered}
          onChange={handleAudioChange}
        />
        <div className="grid grid-cols-3 items-center pt-4">
          <span className="text-xs">
            {elapsedDisplay} / {durationDisplay}
          </span>
          <div className="flex items-center gap-4 justify-self-center">
            <IconButton
              disabled={!isReady}
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {!isReady && src ? (
                <Icon icon="mdi:loading" color="#d90074" className="size-12" />
              ) : isPlaying ? (
                <Icon
                  icon="ic:baseline-pause-circle-outline"
                  color="#d90074"
                  className="size-12"
                />
              ) : (
                <Icon
                  icon="ic:baseline-play-circle"
                  color="#d90074"
                  className="size-12"
                />
              )}
            </IconButton>
          </div>
          <div className="flex gap-3 items-center justify-self-end">
            <IconButton
              onClick={handleMuteUnmute}
              aria-label={volume === 0 ? "unmute" : "mute"}
            >
              {volume === 0 ? (
                <Icon
                  icon="ic:baseline-volume-off"
                  color="#d90074"
                  className="size-8"
                />
              ) : (
                <Icon
                  icon="ic:baseline-volume-up"
                  color="#d90074"
                  className="size-8"
                />
              )}
            </IconButton>
            <VolumeInput volume={volume} onVolumeChange={handleVolumeChange} />
          </div>
        </div>
      </div>
    </div>
  )
}
