import React, {useEffect, useState} from "react";
import { Alert } from "react-bootstrap";
import Message from "../../models/Message";
import {Button} from "react-bootstrap";
import { w3cwebsocket as W3CWebSocket, IMessageEvent } from "websocket";
import {v4 as uuidv4 } from 'uuid';

interface IMessageWindowPresentationProps{
    records: Message[];
}

// const client = new WebSocket('http://localhost:3005/foo');
// const client = new W3CWebSocket('ws://localhost:3005/foo');
// const client = new W3CWebSocket('ws://localhost:3005/foo');

export default function MessageWindowPresentation(props: IMessageWindowPresentationProps) : JSX.Element {
    
    // const websocket = new WebSocket('ws://localhost:3005/foo');


    // useEffect(()=> {
    //     client.onopen = () => {
    //         console.log('websocket connected');
    //     }
    //     client.onmessage = (message) => {
    //         console.log("message received: ", message.data);
    //         messageArray.push(message.data);
    //         setMsg(messageArray);
    //     }
        
    // },[msg]);

    // function handleClick(){
    //     console.log("click");

    //     client.send("hello");
    // }

    function ternaryRenderBasedOnUser(currentUser : string, user : string | undefined){
        return (currentUser === user) ? 
            { margin: "0 5% 20px 40%", ...h6StyleRendered } :
            { margin: "0 40% 20px 5%", ...h6StyleRendered } ;
    }
    
    const currentUser : string = "david";

    return(
        <div>
            {props.records.map((data) => <h6 key={uuidv4()}>{data}</h6>)}
        </div>

        // <div>
        //     {props.records.map((data) => <h6 key={data.id} style={ternaryRenderBasedOnUser(currentUser, data.user?.toString())}>{data.user}: {data.message}</h6>)}
        // </div>
    );
}



const h6StyleRendered = {
    backgroundColor: "lightgrey",
    padding: "3px 5% 3px 5%",
}