// Message.js
import React from "react";
import "./message.css"; // import CSS file for styling

const Message = ({ message }) => {
  return (
    <div
      className={`message-container ${
        message.sender === "me" ? "sent" : "received"
      }`}
    >
      <div className="message-content">{message.content}</div>
    </div>
  );
};

export default Message;
