import { PlayFromTimeProps, TranscriptionProps } from "@/types"
import TranscriptionItem from "./TranscriptionItem"

export default function Transcription({
  transcription,
  audioRef,
  contentRef
}: TranscriptionProps) {
  const playFromTime = ({ currentTime }: PlayFromTimeProps) => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime
      audioRef.current.play()
    }
  }

  return (
    <ul
      className="flex flex-col gap-5 max-w-screen-md text-white"
      ref={contentRef}
    >
      {transcription.map(content => (
        <TranscriptionItem
          key={`${content.start}-${content.end}`}
          start={content.start}
          content={content.content}
          role={content.role}
          playFromTime={playFromTime}
        />
      ))}
    </ul>
  )
}
