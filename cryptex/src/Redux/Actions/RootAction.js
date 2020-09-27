import { NEXT_CLUE, UPDATE_PIN } from "./RootActionTypes";

export function updatePin(id, value) {
    return {
        type : UPDATE_PIN,
        payload
    }
};

export function showNextClue() {
    return {
        type : NEXT_CLUE,
        payload
    }
};