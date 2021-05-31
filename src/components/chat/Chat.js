import React, {useEffect, useState, useRef} from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';
import Navbar from "../navbar/navbar";

import './chat.scss';
import MessagesContainer from "./messages-container/MessagesContainer";

function Chat(props) {
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