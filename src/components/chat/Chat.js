import React, { useEffect, useState, useRef } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Navbar from "../navbar/navbar";
import "./chat.scss";
import MessagesContainer from "./messages-container/MessagesContainer";

function Chat(props) {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyAGDSdzZF4xDDtHulNeLJPeZcJth-hM5fE",
      authDomain: "flashchat-dt.firebaseapp.com",
      projectId: "flashchat-dt",
      storageBucket: "flashchat-dt.appspot.com",
      messagingSenderId: "509568857421",
      appId: "1:509568857421:web:6a205cb24e21c1f630b304",
      measurementId: "G-FWS7VJH3WF",
    });
  } else {
    firebase.app(); // if already initialized, use that one
  }

  const firestore = firebase.firestore();
  const messagesCollection = firestore.collection("messages");
  const query = messagesCollection.orderBy("createdAt", "desc");

  let [messages] = useCollectionData(query, { idField: "id" });
  const [navbarHeight, setNavbarHeight] = useState(0);

  const navbarRef = useRef();
  const messagesRef = useRef();
  
  useEffect(() => {
    setNavbarHeight(navbarRef.current.getBoundingClientRect().height);
  }, []);

  useEffect(() => {
    messagesRef.current.style.height = `calc(100% - ${navbarHeight}px)`;
  }, [navbarHeight]);

  return (
    <div className="chat">
      <Navbar nickname={props.nickname} ref={navbarRef} />
      <MessagesContainer
        ref={messagesRef}
        currentUserId={props.currentUserId}
        nickname={props.nickname}
        messages={messages}
        messagesCollection={messagesCollection}
      />
    </div>
  );
}

export default Chat;
