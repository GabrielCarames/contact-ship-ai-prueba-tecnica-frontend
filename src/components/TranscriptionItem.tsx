import { PlayFromTimeProps, TranscriptionItemProps } from "@/types"

export default function TranscriptionItem({
  start,
  content,
  role,
  playFromTime
}: TranscriptionItemProps) {
  return (
    <li className="flex text-sm sm:text-base">
      <span
        className={`${
          role === "user" ? "text-lightblue" : "text-pink"
        } min-w-14 capitalize pt-2`}
      >
        {role}
      </span>
      <p
        className="p-2 rounded-xl"
        onClick={() => playFromTime({ currentTime: start })}
      >
        {content}
      </p>
    </li>
  )
}
