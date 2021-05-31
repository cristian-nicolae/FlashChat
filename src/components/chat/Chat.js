import React, {useEffect} from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';


function Chat() {

    useEffect( ()=>{
        // firebase.initializeApp({

        // });
        
        // const firestore = firebase.firestore();
    })
    return (
        <div>Chat</div>
    )
}

export default Chat;