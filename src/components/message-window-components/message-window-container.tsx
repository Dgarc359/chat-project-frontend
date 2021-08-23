import React, {useState, useEffect} from "react";
import MessageWindowPresentation from "./message-window-presentation";
import Message from "../../models/Message";
import {useSelector, useDispatch} from "react-redux";
import { MessageState } from "../../redux/reducers/message-reducer";
import { bindActionCreators } from "redux";
import axios from "axios";
import * as actionCreators from "../../redux/actions/message-actions";
// importing all message actions as action creators

interface IMessagesProp {}

export default function MessageWindowContainer(props: IMessagesProp) : JSX.Element {
    // const [messages, setMessages] = useState<Message[]>([]);
    const messages : Message[] = useSelector((state: MessageState) => state.records);
    const dispatch = useDispatch();

    const { loadMessages } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        // const token: string | null = sessionStorage.getItem("token");
        // if(token){
                // use effect based on token
        // }
        axios.get<Message[]>("http://localhost:3004/messages")
            .then(resp => {
                console.log("retrieving data", resp);
                loadMessages(resp.data);
                
            })
    },[])

    return(
        <MessageWindowPresentation records={messages}/>
    );
}