import React, {useState, useEffect} from "react";
import MessageWindowPresentation from "./message-window-presentation";
import Message from "../../models/Message";
import {useSelector, useDispatch} from "react-redux";
import { MessageState } from "../../redux/reducers/message-reducer";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/actions/message-actions";
// importing all message actions as action creators

interface IMessagesProp {}

// const client = new W3CWebSocket('ws://locahost:3005/foo');
const client = new WebSocket('ws://localhost:3005/foo');

export default function MessageWindowContainer(props: IMessagesProp) : JSX.Element {
    // const [messages, setMessages] = useState<Message[]>([]);
    const messages : Message[] = useSelector((state: MessageState) => state.messages);
    const dispatch = useDispatch();

    const { loadMessages } = bindActionCreators(actionCreators, dispatch);
    const { sendMessage } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        client.onopen = () => {
            console.log('websocket connect');
        }
        client.onmessage= (message) => {
            console.log("message received: ", message.data);
           
            // messages.push(message.data);
            sendMessage(message.data);
        }
    },[]);


    return(
        <MessageWindowPresentation records={messages}/>
    );
}


    // useEffect(() => {   
    //     axios.get<Message[]>("http://localhost:3004/messages")
    //         .then(resp => {
    //             console.log("retrieving data", resp.data);
    //             loadMessages(resp.data);
    //         })
    // },[]);

    // useEffect(()=> {
    //     client.onopen = () => {
    //         console.log('websocket connected');
    //     }
    // },[]);

    // function handleClick(){
    //     console.log("click");
    // }