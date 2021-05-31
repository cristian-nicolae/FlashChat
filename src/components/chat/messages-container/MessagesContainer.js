import React, {useState} from 'react';
import SendMessageInput from './send-message-input/SendMessageInput';
import './MessagesContainer.scss'
import Message from './message/Message';

const MessagesContainer = React.forwardRef((props, ref) => {
    const [messages, setMessages] = useState([])

    return (
        <div className="messages-container" ref={ref}>
            <div className="messages-list">
                {messages && messages.map((message) => {
                    <Message
                        currentUserId={props.currentUserId}
                        userId={message.userId}
                        userName={message.userName}
                        content={message.content}
                    />
                })}
            </div>
            <SendMessageInput />
        </div>
    );
})

export default MessagesContainer;