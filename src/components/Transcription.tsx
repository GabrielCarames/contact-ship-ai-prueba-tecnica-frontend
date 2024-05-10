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
    <ul className="flex flex-col gap-10 max-w-screen-md text-white">
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
