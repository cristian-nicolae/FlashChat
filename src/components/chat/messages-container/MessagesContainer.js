import React from "react";
import SendMessageInput from "./send-message-input/SendMessageInput";
import "./MessagesContainer.scss";
import Message from "./message/Message";

const MessagesContainer = React.forwardRef((props, ref) => {
  return (
    <div className="messages-container" ref={ref}>
      <div className="messages-list">
        {props.messages &&
          props.messages.map((message) => (
            <Message
              key={message.id}
              currentUserId={props.currentUserId}
              userId={message.userId}
              userName={message.userName}
              content={message.content}
              messageId={message.id}
            />
          ))}
      </div>

      <SendMessageInput
        messagesCollection={props.messagesCollection}
        userId={props.currentUserId}
        nickname={props.nickname}
      />
    </div>
  );
});

export default MessagesContainer;
