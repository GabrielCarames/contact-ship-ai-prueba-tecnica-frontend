import AudioProgressBar from "./customAudioPlayer/AudioProgressBar"
import IconButton from "./customAudioPlayer/IconButton"
import VolumeInput from "./customAudioPlayer/VolumeInput"
import { Icon } from "@iconify/react/dist/iconify.js"
import { AudioPlayerProps } from "@/types"
import useCustomAudioPlayer from "@/hooks/useCustomAudioPlayer"

export default function CustomAudioPlayer({ src, audioRef }: AudioPlayerProps) {
  const {
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
    setVolume
  } = useCustomAudioPlayer({ audioRef })

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
                <Icon icon="mdi:loading" color="#0074d9" className="size-12" />
              ) : isPlaying ? (
                <Icon
                  icon="ic:baseline-pause-circle-outline"
                  color="#0074d9"
                  className="size-12"
                />
              ) : (
                <Icon
                  icon="ic:baseline-play-circle-outline"
                  color="#0074d9"
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
                  color="#0074d9"
                  className="size-8"
                />
              ) : (
                <Icon
                  icon="ic:baseline-volume-up"
                  color="#0074d9"
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
