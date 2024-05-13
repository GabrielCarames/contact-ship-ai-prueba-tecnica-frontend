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
    setVolume,
    currentAudioRef,
    handleDurationChange
  } = useCustomAudioPlayer({ audioRef, isPlaying, setIsPlaying })

  return (
    <div className="border-t border-t-slate-300 dark:border-t-slate-700 pt-5">
      <div className="bg-dark-1 text-slate-500 dark:text-slate-400 relative">
        <audio
          ref={currentAudioRef}
          preload="metadata"
          autoPlay={false}
          onLoadedMetadata={handleDurationChange}
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
            <span className="text-black dark:text-white">{elapsedDisplay}</span>
            /<span>{durationDisplay}</span>
          </p>
          <div className="flex items-center gap-4 justify-self-center">
            <IconButton
              disabled={!isReady}
              onClick={togglePlayPause}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {!isReady && src ? (
                <span className="icon-[mdi--loading] bg-mediumslateblue size-12 animate-spin" />
              ) : isPlaying ? (
                <div className="border-4 border-mediumslateblue rounded-full p-2 flex justify-center items-center hover:bg-mediumslateblue group duration-300">
                  <span className="icon-[ic--outline-pause] bg-black dark:bg-white size-5 sm:size-7 group-hover:bg-white group-hover:dark:bg-black" />
                </div>
              ) : (
                <div className="border-4 border-mediumslateblue rounded-full p-2 flex justify-center items-center hover:bg-mediumslateblue group duration-300">
                  <span className="icon-[ic--baseline-play-arrow] bg-black dark:bg-white size-5 sm:size-7 group-hover:bg-white group-hover:dark:bg-black" />
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
                <span className="icon-[ic--baseline-volume-off] bg-mediumslateblue size-6 sm:size-8 hover:scale-105 duration-300" />
              ) : (
                <span className="icon-[ic--baseline-volume-up] bg-mediumslateblue size-6 sm:size-8 hover:scale-105 duration-300" />
              )}
            </IconButton>
            <VolumeInput volume={volume} onVolumeChange={handleVolumeChange} />
          </div>
        </div>
      </div>
    </div>
  )
}
