import AudioProgressBar from "./customAudioPlayer/AudioProgressBar"
import IconButton from "./customAudioPlayer/IconButton"
import VolumeInput from "./customAudioPlayer/VolumeInput"
import { AudioPlayerProps } from "@/types"
import useCustomAudioPlayer from "@/hooks/useCustomAudioPlayer"

export default function CustomAudioPlayer({
  src,
  audioRef,
  isPlaying,
  setIsPlaying
}: AudioPlayerProps) {
  const {
    isReady,
    duration,
    currrentProgress,
    buffered,
    volume,
    durationDisplay,
    elapsedDisplay,
    togglePlayPause,
    handleBufferProgress,
    handleMuteUnmute,
    handleVolumeChange,
    handleAudioChange,
    setCurrrentProgress,
    setVolume
  } = useCustomAudioPlayer({ audioRef, isPlaying, setIsPlaying })

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
          <p className="text-xs flex gap-1">
            <span className="text-white">{elapsedDisplay}</span>/
            <span>{durationDisplay}</span>
          </p>
          <div className="flex items-center gap-4 justify-self-center">
            <IconButton
              disabled={!isReady}
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {!isReady && src ? (
                <span className="icon-[mdi--loading] bg-mediumslateblue size-12" />
              ) : isPlaying ? (
                <div className="border-4 border-mediumslateblue rounded-full p-2 flex justify-center items-center">
                  <span className="icon-[ic--outline-pause] bg-white size-7" />
                </div>
              ) : (
                <div className="border-4 border-mediumslateblue rounded-full p-2 flex justify-center items-center">
                  <span className="icon-[ic--baseline-play-arrow] bg-white size-7" />
                </div>
              )}
            </IconButton>
          </div>
          <div className="flex gap-3 items-center justify-self-end">
            <IconButton
              onClick={handleMuteUnmute}
              aria-label={volume === 0 ? "unmute" : "mute"}
            >
              {volume === 0 ? (
                <span className="icon-[ic--baseline-volume-off] bg-mediumslateblue size-8" />
              ) : (
                <span className="icon-[ic--baseline-volume-up] bg-mediumslateblue size-8" />
              )}
            </IconButton>
            <VolumeInput volume={volume} onVolumeChange={handleVolumeChange} />
          </div>
        </div>
      </div>
    </div>
  )
}
