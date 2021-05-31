import React, {useEffect} from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import Navbar from "../navbar/navbar";


function Chat() {

    useEffect( ()=>{
        // firebase.initializeApp({

        // });
        
        // const firestore = firebase.firestore();
    })
    return (
        <div>
            <Navbar></Navbar>
            Chat
        </div>
    )
}

export default Chat;