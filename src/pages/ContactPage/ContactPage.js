import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import contactService from '../../services/ContactService';

import ContactList from '../../components/ContactList';
import ContactFilter from '../../components/ContactFilter';

import './ContactPage.css';

import plusImg from '../../assets/icons/plus.png';

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

    handleFilter = (e) => {
        this.setState(Object.assign(this.state.filterBy, { term: e.target.value }));
        // console.log(this.state.filterBy.term);
        contactService.getContacts(this.state.filterBy)
            .then(contacts => {
                this.setState({ contacts })
            })
    }

    addContact() {
        console.log('addContact');
        this.props.history.push('/contact/edit');
        // <Redirect to='/contact/edit' />


    }

    render() {
        return (
            <div className="contacts-page">
                <ContactFilter term={this.state.filterBy.term} onFilter={this.handleFilter} />
                <div className="contacts-container">
                    <ContactList contacts={this.state.contacts} />
                </div>
                <Link to="/contact/edit">
                    <img src={plusImg} alt="Add contact" />
                </Link>
            </div >
        );
    }
}

export default ContactPage;