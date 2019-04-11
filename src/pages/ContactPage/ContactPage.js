import React, { Component } from 'react';
import contactService from '../../services/ContactService';

import ContactList from '../../components/ContactList'

import './ContactPage.css';

class ContactPage extends Component {
    state = {
        contacts: [],
        filterBy: {
            term: ''
        }
    }

    componentDidMount() {
        contactService.getContacts(this.state.filterBy)
            .then(contacts => {
                this.setState({ contacts })
            })
    }

    onFilter = (e) => {
        this.setState(Object.assign(this.state.filterBy, { term: e.target.value }));
        // console.log(this.state.filterBy.term);
        contactService.getContacts(this.state.filterBy)
            .then(contacts => {
                this.setState({ contacts })
            })
    }

    render() {
        return (
            <div className="contacts-page">
                <input type="text" className="search-container" placeholder="Search" value={this.state.filterBy.term} onChange={this.onFilter} />
                <div className="contacts-container">
                    <ContactList contacts={this.state.contacts} />
                </div>
            </div >
        );
    }
}

export default ContactPage;