import { TextareaAutosize } from '@material-ui/core';
import React, { useState } from 'react';
import "./Message.scss"

function Message(props) {
    const [editMode, setEditMode] = useState(false);
    const [message, setMessage] = useState(props.content);

    let editMessage = (e) => {
        if(e.key === "Enter" || e.key === "NumpadEnter"){
            setEditMode(false);
        }

    }
    return (
        <div className="single-message">
            {props.content ? 
                props.userId === props.currentUserId 
                    ? !editMode
                        ?<div className="sent-message">
                            <div className="sent-message__popover">
                                <div className="sent-message__popover--container">
                                    <div className="sent-message__popover__edit" onClick={() => setEditMode(true)}></div>
                                    <div className="sent-message__popover__delete" onClick={() => props.deleteMessage(props.messageId)}></div>
                                </div>
                            </div>
                            {props.content}
                        </div>
                        :<div className="edit-message">
                            <TextareaAutosize 
                                className="edit-message__input"
                                rowsMin={1} 
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={editMessage}
                                />

                        </div> 
                    : <div className="received-message">
                        <div className="received-message-user">@{props.userName}</div>  
                        <div className="received-message-content">{props.content}</div>
                    </div>
             : <div></div>
            }
        </div>
    );
}

export default Message;