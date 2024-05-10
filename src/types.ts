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
