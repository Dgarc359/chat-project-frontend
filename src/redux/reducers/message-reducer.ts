import Message from "../../models/Message";
import {IAction} from "../actions/message-actions";

export interface MessageState {
    messages: Message[];
}

/**
 * Message reducer takes in the previous state and the new action and returns the new desired state
 */

const messageReducer = (messageState : Message[] = [], action: IAction<Message> | IAction<Message[]>) => {
    switch(action.type){
        case "LOAD":
            return action.payload;
        case "SEND":
            return [...messageState, action.payload];
        default:
            return messageState;
    }
}

export default messageReducer;