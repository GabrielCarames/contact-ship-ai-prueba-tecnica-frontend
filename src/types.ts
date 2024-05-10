export interface TranscriptionJSONProps {
  start: number
  content: string
  end: number
  role: "user" | "agent"
}

export interface TranscriptionProps {
  transcription: TranscriptionJSONProps[]
  audioRef: React.RefObject<HTMLAudioElement>
  contentRef: React.RefObject<HTMLUListElement>
}

export interface PlayFromTimeProps {
  currentTime: number
}

export interface TranscriptionItemProps
  extends Partial<TranscriptionJSONProps> {
  playFromTime: ({ currentTime }: PlayFromTimeProps) => void
  start: number
}
