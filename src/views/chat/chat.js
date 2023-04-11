// ChatApp.js
import React, { useState } from "react";
import ContactList from "./contactlist";
import ChatWindow from "./chatwindow";
import "./chat.css"; // import CSS file for styling

const Chat = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div className="chat-app-container">
      <div className="contact-list-container">
        <ContactList
          handleContactSelect={handleContactSelect}
          selectedContact={selectedContact}
        />
      </div>
      <div className="chat-window-container">
        <ChatWindow selectedContact={selectedContact} />
      </div>
    </div>
  );
};

export default Chat;
