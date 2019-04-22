import React, { Component } from 'react';
import contactService from '../../services/ContactService';
import { Link, withRouter } from 'react-router-dom';

import imgAvatar from '../../assets/img_avatar.png'
import imgBack from '../../assets/icons/back.png'
import imgDelete from '../../assets/icons/delete.png'

import './ContactEditPage.css'

class ContactEditPage extends Component {
    state = {
        contact: {
            name: '',
            email: '',
            phone: ''
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            contactService.getContactById(id)
                .then(contact => {
                    // console.log('componentDidMount', contact)
                    this.setState({ contact: { ...contact } });
                })
        }
    }

    handleChange = (event) => {
        // console.log(e.target.name); // the name of the form element
        // console.log(e.target.value); // the value of the form element
        this.setState(Object.assign(this.state.contact, { [event.target.name]: event.target.value }));
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // const contact = this.state.contact;
        // console.log(contact);
        contactService.saveContact(this.state.contact)
            .then(contact => {
                // console.log(contact);
                this.props.history.push(`/contact/${contact._id}`);
            })
    }

    handleDelete = () => {
        const id = this.props.match.params.id;
        if (id) {

            contactService.deleteContact(id)
                .then(contacts => {
                    // console.log(contacts);
                })
        }
    }

    render() {
        const contact = this.state.contact;
        const avatar = contact.picture || imgAvatar;
        return (
            <div className="contact-edit contact-edit-wrapper">
                <div className="contact-details-btns">
                    <Link to={contact._id ? `/contact/${contact._id}` : '/contact'} >
                        <img src={imgBack} alt="Back" title="Back" width="40" height="40" />
                    </Link>
                    <Link to={'/contact'}>
                        <img src={imgDelete} alt="Delete" title="Delete" width="40" height="40" onClick={this.handleDelete} />
                    </Link>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <img src={avatar} alt="Person" width="96" height="96" />
                    <div className="contact-edit-rows">
                        <label className="contact-edit-row">
                            Name:
                        <input type="text" name="name" value={contact.name} onChange={this.handleChange} />
                        </label>
                        <label className="contact-edit-row">
                            Phone:
                        <input type="text" name="phone" value={contact.phone} onChange={this.handleChange} />
                        </label>
                        <label className="contact-edit-row">
                            Email:
                        <input type="text" name="email" value={contact.email} onChange={this.handleChange} />
                        </label>
                    </div>
                    <input type="submit" value="Save" />
                </form>
            </div >
        )
    }
}


export default withRouter(ContactEditPage);