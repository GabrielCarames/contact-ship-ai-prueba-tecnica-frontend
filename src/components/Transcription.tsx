import { TranscriptionProps } from "@/types"
import TranscriptionItem from "./TranscriptionItem"
import TranscriptionHeader from "./TranscriptionHeader"

export default function Transcription({
  transcription,
  contentRef,
  playFromTime
}: TranscriptionProps) {
  return (
    <section className="flex flex-col gap-3">
      <TranscriptionHeader />
      <ul
        className="flex flex-col gap-2 sm:gap-5 max-w-screen-md text-white max-h-96 overflow-y-scroll"
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
    </section>
  )
}
