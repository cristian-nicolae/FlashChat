import { TextareaAutosize } from "@material-ui/core";
import React, { useState } from "react";
import "./Message.scss";

function Message(props) {
  const [editMode, setEditMode] = useState(false);
  const [message, setMessage] = useState(props.content);
  let Filter = require("bad-words");
  let filter = new Filter();

  const editMessage = async (e) => {
    let content = /[a-zA-Z]/g.test(message) ? filter.clean(message) : message;
    await props.messagesCollection.doc(props.messageId).update({
      content: content,
    });
  };

  const deleteMessage = async (e) => {
    await props.messagesCollection.doc(props.messageId).delete();
  };

  let submitEditMessage = (e) => {
    if (e.key === "Enter" || e.key === "NumpadEnter") {
      setEditMode(false);
      editMessage();
    }
  };
  return (
    <div className="single-message">
      {props.content ? (
        props.userId === props.currentUserId ? (
          !editMode ? (
            <div className="sent-message">
              <div className="sent-message__popover">
                <div className="sent-message__popover--container">
                  <div
                    className="sent-message__popover__edit"
                    onClick={() => setEditMode(true)}
                  ></div>
                  <div
                    className="sent-message__popover__delete"
                    onClick={() => deleteMessage()}
                  ></div>
                </div>
              </div>
              {props.content}
            </div>
          ) : (
            <div className="edit-message">
              <TextareaAutosize
                className="edit-message__input"
                rowsMin={1}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={submitEditMessage}
              />
            </div>
          )
        ) : (
          <div className="received-message">
            <div className="received-message-user">@{props.userName}</div>
            <div className="received-message-content">{props.content}</div>
          </div>
        )
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Message;
