import { UPDATE_PIN } from "../Actions/RootActionTypes"

const initialState = {
    userPin: Array.apply(null, Array(4)).map(function () {}),
    passPin: [1,2,3,4], // hard code for now. read from config key later
    solved: false
};

function rootReducer(state = initialState, action) {
    if (action.type == UPDATE_PIN) {
        //update userPin value
        console.log(action.payload);
        // do a check if userpin matches pass pin
    }

    return state;
}


export default rootReducer;