import { RefObject } from "react"

export interface TranscriptionJSONProps {
  start: number
  content: string
  end: number
  role: "user" | "agent"
}

export interface TranscriptionProps {
  transcription: TranscriptionJSONProps[]
  contentRef: React.RefObject<HTMLUListElement>
  playFromTime: ({ currentTime }: PlayFromTimeProps) => void
}

export interface PlayFromTimeProps {
  currentTime: number
}

export interface TranscriptionItemProps
  extends Partial<TranscriptionJSONProps> {
  playFromTime: ({ currentTime }: PlayFromTimeProps) => void
  start: number
}

export interface ToggleActiveContentProps {
  contentIndexToActivate: number
  currentContentRef: HTMLUListElement
}

export interface AudioPlayerProps {
  src: string
  audioRef: RefObject<HTMLAudioElement>
}

export interface ProgressCSSProps extends React.CSSProperties {
  "--progress-width": number
  "--buffered-width": number
}

export interface AudioProgressBarProps
  extends React.ComponentPropsWithoutRef<"input"> {
  duration: number
  currentProgress: number
  buffered: number
}

export interface VolumeInputProps {
  volume: number
  onVolumeChange: (volume: number) => void
}
