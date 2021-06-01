import React, {useState } from "react";
import "./SendMessageInput.scss";

function SendMessageInput(props) {
  const [message, setMessage] = useState("");
  

  const sendMessage = async (e) => {
    e.preventDefault();

    await props.messagesCollection.add({
      content: message,
      userName: props.nickname,
      userId: props.userId,
      createdAt: Date.now(),
    });
    setMessage("");

  };

  function enterSubmit(event) {
    if (event.code === "Enter" || event.code === "NumpadEnter") sendMessage(event);
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
