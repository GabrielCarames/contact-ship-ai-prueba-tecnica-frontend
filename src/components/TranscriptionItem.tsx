import { TranscriptionItemProps } from "@/types"

export default function TranscriptionItem({
  startTime,
  content,
  playFromTime
}: TranscriptionItemProps) {
  return (
    <li>
      <p
        onClick={() => playFromTime({ currentTime: startTime })}
        className="text-white text-2xl"
      >
        {content}
      </p>
    </li>
  )
}
