import { UPDATE_PIN } from './StartActionTypes'

export const updatePin = (index, value) => ({
  type: UPDATE_PIN,
  payload: {
    index,
    value
  }
})
