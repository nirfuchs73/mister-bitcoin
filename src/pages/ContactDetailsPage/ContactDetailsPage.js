import React, { Component } from 'react';
import contactService from '../../services/ContactService';
import { NavLink } from 'react-router-dom'

import imgAvatar from '../../assets/img_avatar.png'
import imgBack from '../../assets/icons/back.png'
import imgEdit from '../../assets/icons/edit.png'

import './ContactDetailsPage.css'

class ContactDetailsPage extends Component {
    state = {
        contact: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        contactService.getContactById(id)
            .then(contact => {
                this.setState({ contact });
            })
    }

    render() {
        const contact = this.state.contact;
        const avatar = contact.picture || imgAvatar;

        return (
            <div className="contact-details contact-details-wrapper">
                <div className="contact-details-btns">
                    <NavLink to="/contact">
                        <img src={imgBack} alt="Back" title="Back" width="40" height="40" />
                    </NavLink>
                    <NavLink to={`/contact/edit/${this.props.match.params.id}`}>
                        <img src={imgEdit} alt="Edit" title="Edit" width="40" height="40" />
                    </NavLink>
                </div>
                <div className="contact-details-body">
                    <img src={avatar} alt="Person" width="96" height="96" />
                    <div className="contact-details-row">Name: {contact.name}</div>
                    <div className="contact-details-row">Phone: {contact.phone}</div>
                    <div className="contact-details-row">Email: {contact.email}</div>
                </div>
            </div >
        )
    }
}


export default ContactDetailsPage;