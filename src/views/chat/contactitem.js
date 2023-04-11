// ContactItem.js
import React from "react";
import "./contactitem.css"; // import CSS file for styling

const ContactItem = ({ contact, handleContactSelect, selectedContact }) => {
  const handleClick = () => {
    handleContactSelect(contact);
  };

  return (
    <li
      className={`contact-item ${
        selectedContact === contact ? "selected" : ""
      }`}
      onClick={handleClick}
    >
      <img src={contact.avatar} alt={contact.name} className="avatar" />
      <div className="contact-details">
        <h3 className="contact-name">{contact.name}</h3>
        <p
          className={`contact-status ${contact.online ? "online" : "offline"}`}
        >
          {contact.online ? "Online" : "Offline"}
        </p>
      </div>
    </li>
  );
};

export default ContactItem;
