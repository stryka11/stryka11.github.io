import { NEXT_CLUE, UPDATE_PIN } from './StartActionTypes'

export const updatePin = (index, value) => ({
  type: UPDATE_PIN,
  payload: {
    index,
    value
  }
})

export const showNextClue = () => ({
  type: NEXT_CLUE,
  payload: {

  }
})
