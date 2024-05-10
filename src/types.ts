export interface TranscriptionProps {
  transcription: { start: number; content: string; end: number }[]
  audioRef: React.RefObject<HTMLAudioElement>
}

export interface PlayFromTimeProps {
  currentTime: number
}

export interface TranscriptionItemProps {
  startTime: number
  content: string
  playFromTime: ({ currentTime }: PlayFromTimeProps) => void
}
