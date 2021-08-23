import React, {useEffect, useState} from "react";
import Message from "../../models/Message";

interface IMessageWindowPresentationProps{
    records: Message[];
}

export default function MessageWindowPresentation(props: IMessageWindowPresentationProps) : JSX.Element {
    if(props.records && props.records.length > 0){
        const propKeys = Object.keys(props.records[0]);
        return(
            <h6>{propKeys.map(propKey=><th key={propKey}>{propKey}</th>)}</h6>
        );
    }
    else {
        return(
            <h1>test</h1>
        );
    }
}