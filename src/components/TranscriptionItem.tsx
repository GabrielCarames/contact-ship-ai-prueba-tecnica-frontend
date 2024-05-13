import { TranscriptionItemProps } from "@/types"

export default function TranscriptionItem({
  start,
  content,
  role,
  playFromTime
}: TranscriptionItemProps) {
  return (
    <li className="flex text-sm sm:text-base group">
      <span
        className={`${
          role === "user" ? "text-darkviolet" : "text-orange"
        } min-w-14 capitalize pt-2`}
      >
        {role}
      </span>
      <p
        className="p-2 rounded-xl group-[.active-content]:bg-mediumslateblue group-[.active-content]:text-white duration-300"
        onClick={() => playFromTime({ currentTime: start })}
      >
        {content}
      </p>
    </li>
  )
}
