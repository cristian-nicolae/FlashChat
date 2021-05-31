import React from 'react';
import "./Message.scss"

function Message(props) {
    return (
        <div className="single-message">
            {props.content ? 
            <div>
                {props.userId === props.currentUserId ? 
                    <div className="sent-message">{props.content}</div> : 
                    <div className="received-message">
                        <div className="received-message-user">{props.userName}</div>  
                        <div className="received-message-content">{props.content}</div>
                    </div>
                }
            </div> : <div></div>
            }
        </div>
    );
}

export default Message;