// ContactList.js
import React from "react";
import ContactItem from "./contactitem";
import "./contactlist.css"; // import CSS file for styling

const ContactList = ({ handleContactSelect, selectedContact }) => {
  const contacts = [
    {
      id: 1,
      name: "John",
      online: true,
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 2,
      name: "Alice",
      online: false,
      avatar: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      name: "Bob",
      online: true,
      avatar: "https://via.placeholder.com/40",
    },
  ];

  return (
    <ul className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          handleContactSelect={handleContactSelect}
          selectedContact={selectedContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
