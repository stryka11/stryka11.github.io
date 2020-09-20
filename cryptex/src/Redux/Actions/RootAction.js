import { UPDATE_PIN } from "./RootActionTypes";

export function updatePin(payload) {
    return {
        type : UPDATE_PIN,
        payload
    }
};