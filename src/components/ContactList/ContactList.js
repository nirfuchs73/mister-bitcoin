import React from 'react';
import { Link } from 'react-router-dom';
import ContactPreview from '../ContactPreview';


import './ContactList.css';

const ContactList = (props) => {
    const contactsPreview = props.contacts.map((contact, i) => {
        return (
            <li key={contact._id} className="contacts-list-item">
                <Link to={`contact/${contact._id}`}>
                    <ContactPreview contact={contact} />
                </Link>
            </li>
        )
    });

    return (
        <div className="contacts-list">
            <ul>
                {contactsPreview}
            </ul>
        </div>
    );
}

export default ContactList;