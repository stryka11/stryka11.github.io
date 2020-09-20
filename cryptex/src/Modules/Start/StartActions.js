import { UPDATE_PIN } from './StartActionTypes'

export const updatePin = (content, index) => ({
  type: UPDATE_PIN,
  payload: {
    index,
    content
  }
})
