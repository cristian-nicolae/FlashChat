import React, {useEffect, useState, useRef} from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Navbar from "../navbar/navbar";
import './chat.scss';
import MessagesContainer from "./messages-container/MessagesContainer";

function Chat(props) {

    firebase.initializeApp({
        apiKey: "AIzaSyAGDSdzZF4xDDtHulNeLJPeZcJth-hM5fE",
        authDomain: "flashchat-dt.firebaseapp.com",
        projectId: "flashchat-dt",
        storageBucket: "flashchat-dt.appspot.com",
        messagingSenderId: "509568857421",
        appId: "1:509568857421:web:aeb6dad4e98a91a930b304",
        measurementId: "G-0FWMQZTBBW"
      })
      
    const firestore = firebase.firestore();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, {idField: 'id'});
    const [navbarHeight, setNavbarHeight] = useState(0);

    const navbarRef = useRef();
    const messagesRef = useRef();

    useEffect( ()=>{
        setNavbarHeight(navbarRef.current.getBoundingClientRect().height);
    })

    useEffect(()=> {
        messagesRef.current.style.height = `calc(100% - ${navbarHeight}px)`;
        console.log(navbarHeight);
    }, [navbarHeight])
    
    return (
        <div className="chat">
            <Navbar 
                nickname={props.nickname}
                ref={navbarRef}
            />
            <MessagesContainer 
                ref={messagesRef}
                currentUserId={props.currentUserId}
            />
        </div>
    )
}

export default Chat;