import Message from "../../models/Message";

/**
 * Action creators for message object
 */

export interface IAction<T>{
    type: string;
    payload: T;
}

/**
 * creating an action which loads messages from database
 * @param messages 
 * @returns 
 */
export const loadMessages : (messages: Message[]) => IAction<Message[]> = (messages) => {
    return{
        type: "LOAD",
        payload: messages,
    };
};

/**
 * creating an action to be dispatched when we send a new message
 * @param message 
 * @returns 
 */
export const sendMessage : (message: Message) => IAction<Message> = (message) => {
    return{
        type:"SEND",
        payload: message,
    };
};