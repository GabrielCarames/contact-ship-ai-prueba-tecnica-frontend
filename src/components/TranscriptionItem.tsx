import { TranscriptionItemProps } from "@/types"

export default function TranscriptionItem({
  start,
  content,
  role,
  playFromTime
}: TranscriptionItemProps) {
  return (
    <li className="flex gap-3 text-sm sm:text-base">
      <span
        className={`${
          role === "user" ? "text-lightblue" : "text-pink"
        } min-w-14 capitalize`}
      >
        {role}
      </span>
      <p className="" onClick={() => playFromTime({ currentTime: start })}>
        {content}
      </p>
    </li>
  )
}
