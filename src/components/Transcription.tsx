import { TranscriptionProps } from "@/types"
import TranscriptionItem from "./TranscriptionItem"
import TranscriptionHeader from "./TranscriptionHeader"

export default function Transcription({
  transcription,
  contentRef,
  playFromTime
}: TranscriptionProps) {
  return (
    <section className="flex flex-col gap-0">
      <TranscriptionHeader />
      <ul
        className="flex flex-col gap-2 text-black dark:text-white max-w-screen-md max-h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-mediumslateblue scrollbar-track-mercury dark:scrollbar-track-bunker pr-5 py-2"
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
