import { audio, events as audioEvents, actions as audioActions } from 'html5-audio-driver'

export default (audioFiles) => {
  const audioElement = audio(audioFiles)

  return {
    events: audioEvents(audioElement),
    actions: audioActions(audioElement)
  }
}
