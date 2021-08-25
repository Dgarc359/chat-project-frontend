import { combineReducers } from "redux";
import messageReducer from "./message-reducer";

const reducers = combineReducers({
    // reducers go here
    // tracks: trackReducer
    messages: messageReducer,
})

export default reducers