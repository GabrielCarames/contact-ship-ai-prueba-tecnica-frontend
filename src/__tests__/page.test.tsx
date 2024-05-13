import { beforeAll, expect, test } from "vitest"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import HomePage from "../app/page"

beforeAll(() => {
  render(<HomePage />)
})

test("should render the home page", () => {
  expect(
    screen.getByRole("heading", { level: 1, name: "ContactShip AI" })
  ).toBeDefined()
})

test("should render transcription section", () => {
  const transcription = screen.getByText("Transcripción")
  expect(transcription).toBeDefined()
})

test("should load play button", async () => {
  await waitFor(() => {
    const tituloElement = screen.getByLabelText(/Play/i)
    expect(tituloElement).toBeDefined()
  })
})

test("should play audio when clicked", () => {
  const audioElementPlaying = screen.getByLabelText("Play")
  expect(audioElementPlaying).toBeDefined
  fireEvent.click(audioElementPlaying)
  const audioElementPause = screen.getByLabelText("Pause")
  expect(audioElementPause).toBeDefined
})

test("should mute audio when clicked", () => {
  const audioElement = screen.getByLabelText("mute")
  expect(audioElement).toBeDefined
  fireEvent.click(audioElement)
  const audioElementMuted = screen.getByLabelText("unmute")
  expect(audioElementMuted).toBeDefined
})

test("should change theme when clicked", () => {
  const themeButtonDark = screen.getByLabelText("Cambiar a tema oscuro")
  expect(themeButtonDark).toBeDefined
  fireEvent.click(themeButtonDark)
  const themeButtonLight = screen.getByLabelText("Cambiar a tema oscuro")
  expect(themeButtonLight).toBeDefined
})
