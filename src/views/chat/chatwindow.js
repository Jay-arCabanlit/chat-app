// ChatWindow.js
import React from "react";
import Message from "./message";
import MessageInput from "./messageinput";
import "./chatwindow.css"; // import CSS file for styling

const ChatWindow = ({ selectedContact }) => {
  const messages = [
    { id: 1, sender: "me", content: "Hello" },
    { id: 2, sender: "John", content: "Hi" },
    { id: 3, sender: "me", content: "How are you?" },
    { id: 4, sender: "John", content: "I'm good, thanks!" },
  ];

  return (
    <div className="chat-window">
      {selectedContact ? (
        <>
          <div className="chat-header">
            <h2 className="chat-contact-name">{selectedContact.name}</h2>
            <p className="chat-contact-status">
              {selectedContact.online ? "Online" : "Offline"}
            </p>
          </div>
          <div className="chat-messages-container">
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>
          <MessageInput />
        </>
      ) : (
        <p className="chat-no-contact">Select a contact to start chatting</p>
      )}
    </div>
  );
};

export default ChatWindow;
