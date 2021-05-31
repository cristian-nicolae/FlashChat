import React, {useEffect} from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import Navbar from "../navbar/navbar";

import './chat.scss';

function Chat(props) {

    useEffect( ()=>{
        // firebase.initializeApp({

        // });
        
        // const firestore = firebase.firestore();
    })
    return (
        <div className="chat">
            <Navbar nickname={props.nickname}></Navbar>
            Chat
        </div>
    )
}

export default Chat;