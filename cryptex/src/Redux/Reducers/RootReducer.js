import { UPDATE_PIN } from "../Actions/RootActionTypes"

const initialState = {
    userPin: Array.apply(null, Array(4)).map(function () {}),
    passPin: ["1","8","2","4"], // hard code for now. read from config key later
    solved: false,
    secret: "Gowno. You have to guess the pin to get the secret letter."
};

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}


function rootReducer(state = initialState, action) {
    if (action.type === UPDATE_PIN) {

        const index = action.payload.index
        const value = action.payload.value

        const updatedPin = [...state.userPin]
        updatedPin[index] = value

        const isSolved = arrayEquals(state.passPin, updatedPin)

        return {
            ...state,
            userPin : updatedPin,
            solved : isSolved, //ugly. fix this later
            secret : isSolved ? 'M' : "Gowno. You have to guess the pin to get the secret letter."
            }
        }


    return state;
}


export default rootReducer;