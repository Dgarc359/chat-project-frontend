import React, {useEffect, useState} from "react";
import { Table } from "react-bootstrap";
import Message from "../../models/Message";
import {Button} from "react-bootstrap";
import { w3cwebsocket as W3CWebSocket } from "websocket";

interface IMessageWindowPresentationProps{
    records: Message[];
}

// const client = new WebSocket('http://localhost:3005/foo');
// const client = new W3CWebSocket('ws://localhost:3005/foo');
const client = new W3CWebSocket('ws://localhost:3005/foo');

export default function MessageWindowPresentation(props: IMessageWindowPresentationProps) : JSX.Element {
    
    useEffect(()=> {
        client.onopen = () => {
            console.log('websocket connected');
        }
    },[]);

    function handleClick(){
        console.log("click");

        client.send("test");
    }

    return(
        // <div>
        //     {props.records.map((data) => <h6>{data.message} - {data.user}</h6>)}
        // </div>
        <Button key="Key" onClick={handleClick}>Click Me!</Button>
    );
}