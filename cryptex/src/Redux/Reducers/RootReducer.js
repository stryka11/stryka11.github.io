import { UPDATE_PIN } from "../Actions/RootActionTypes"

const initialState = {
    userPin: Array.apply(null, Array(4)).map(function () {}),
    passPin: [1,2,3,4], // hard code for now. read from config key later
    solved: false
};

function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      // This isn't the item we care about - keep it as-is
      return item
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...action.item
    }
  })
}

function rootReducer(state = initialState, action) {
    if (action.type == UPDATE_PIN) {
        //update userPin value
        console.log(action.payload);

        const index = action.payload.index
        const value = action.payload.value

        const updatedPin = [...state.userPin]
        updatedPin[index] = value
        console.log(updatedPin);


        return {
            ...state,
            userPin : updatedPin,
            }
        }


    return state;
}


export default rootReducer;