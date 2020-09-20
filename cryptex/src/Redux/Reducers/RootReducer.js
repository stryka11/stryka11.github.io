import { UPDATE_PIN } from "../Actions/RootActionTypes"

const initialState = {
    articles: []
};

function rootReducer(state = initialState, action) {
    if (action.type == UPDATE_PIN) {
        console.log(action.payload);
    }

    return state;
}


export default rootReducer;