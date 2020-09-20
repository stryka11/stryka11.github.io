import { UPDATE_PIN } from "../Actions/RootActionTypes"

const initialState = {
    userPin: Array.apply(null, Array(4)).map(function () {}),
    passPin: ["1","2","3","4"], // hard code for now. read from config key later
    solved: false
};

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}


function rootReducer(state = initialState, action) {
    if (action.type == UPDATE_PIN) {

        const index = action.payload.index
        const value = action.payload.value

        const updatedPin = [...state.userPin]
        updatedPin[index] = value

        return {
            ...state,
            userPin : updatedPin,
            solved : arrayEquals(state.passPin, updatedPin) //ugly. fix this later
            }
        }


    return state;
}


export default rootReducer;