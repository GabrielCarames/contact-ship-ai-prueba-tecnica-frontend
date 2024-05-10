import { PlayFromTimeProps, TranscriptionProps } from "@/types"
import TranscriptionItem from "./TranscriptionItem"

export default function Transcription({
  transcription,
  audioRef
}: TranscriptionProps) {
  const playFromTime = ({ currentTime }: PlayFromTimeProps) => {
    if (audioRef.current) {
      audioRef.current.currentTime = currentTime
      audioRef.current.play()
    }
  }

  return (
    <ul className="flex flex-col gap-10 max-w-screen-md">
      {transcription.map(content => (
        <TranscriptionItem
          key={`${content.start}-${content.end}`}
          startTime={content.start}
          content={content.content}
          playFromTime={playFromTime}
        />
      ))}
    </ul>
  )
}
