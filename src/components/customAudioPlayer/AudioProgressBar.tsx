import { AudioProgressBarProps, ProgressCSSProps } from "@/types"

export default function AudioProgressBar(props: AudioProgressBarProps) {
  const { duration, currentProgress, buffered, ...rest } = props

  const progressBarWidth = isNaN(currentProgress / duration)
    ? 0
    : currentProgress / duration
  const bufferedWidth = isNaN(buffered / duration) ? 0 : buffered / duration

  const progressStyles: ProgressCSSProps = {
    "--progress-width": progressBarWidth,
    "--buffered-width": bufferedWidth
  }

  return (
    <div className="absolute h-1 -top-[4px] left-0 right-0 group">
      <input
        type="range"
        name="progress"
        className={`progress-bar absolute inset-0 w-full m-0 h-full appearance-none cursor-pointer bg-mercury dark:bg-bunker group-hover:h-2 transition-all accent-mediumslateblue hover:accent-mediumslateblue before:absolute before:inset-0 before:h-full before:w-full before:bg-mediumslateblue before:origin-left after:absolute after:h-full after:w-full after:bg-mediumslateblue/50`}
        style={progressStyles}
        min={0}
        max={duration}
        value={currentProgress}
        {...rest}
      />
    </div>
  )
}
