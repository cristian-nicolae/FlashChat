import React, {useState } from "react";
import "./SendMessageInput.scss";

function SendMessageInput(props) {
  const [message, setMessage] = useState("");
  let Filter = require('bad-words');
  let filter = new Filter();


  const sendMessage = async (e) => {
    e.preventDefault();
    let content = /[a-zA-Z]/g.test(message) ? filter.clean(message) : message;

    await props.messagesCollection.add({
      content: content,
      userName: props.nickname,
      userId: props.userId,
      createdAt: Date.now(),
    });
    setMessage("");

  };

  function enterSubmit(e) {
    if(e.key === "Enter" || e.key === "NumpadEnter")
      sendMessage(e);
  }

  return (
    <div className="send-message">
      <input
        type="text"
        className="input-message"
        value={message}
        placeholder="Enter a new message"
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={enterSubmit}
      />

      <div className="send-message-input">
        <div className="send-message-button" onClick={sendMessage}></div>
      </div>
    </div>
  );
}

export default SendMessageInput;
