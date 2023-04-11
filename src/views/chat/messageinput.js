// MessageInput.js
import React, { useState } from "react";
import "./messageinput.css"; // import CSS file for styling

const MessageInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      // Add logic for sending the message
      setInputValue("");
    }
  };

  return (
    <div className="message-input-container">
      <textarea
        className="message-input"
        placeholder="Type your message..."
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      ></textarea>
      <button className="send-button">Send</button>
    </div>
  );
};

export default MessageInput;
