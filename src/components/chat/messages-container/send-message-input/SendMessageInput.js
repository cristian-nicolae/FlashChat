import React, { useState } from 'react';
import './SendMessageInput.scss';

function SendMessageInput(props) {
    const [message, setMessage] = useState('');

    return (
        <div className="send-message">
            <input
                type="text"
                className="input-message"
                value={message}
                placeholder="Enter a new message"
                onChange={e => setMessage(e.target.value)}
            />
            
            <div className="send-message-input">
                <div className="send-message-button"></div>
            </div>
        </div>
    );
}

export default SendMessageInput;