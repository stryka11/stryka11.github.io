import { UPDATE_PIN } from './actionTypes'

export const updatePin = (content, index) => ({
  type: UPDATE_PIN,
  payload: {
    index,
    content
  }
})