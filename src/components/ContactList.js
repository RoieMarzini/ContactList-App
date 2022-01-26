import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({ getContactId, contacts }) => {
  const deleteContactHandler = (id) => {
    getContactId(id);
  };

  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">
        {contacts.map((contact) => {
          return (
            <ContactCard
              contact={contact}
              clickHander={deleteContactHandler}
              key={contact.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContactList;
