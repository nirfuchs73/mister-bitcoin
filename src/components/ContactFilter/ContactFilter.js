import React, { Component } from 'react';

class ContactFilter extends Component {
    // state = {}
    render() {
        return (
            <input type="text" className="search-container" placeholder="Search" value={this.props.term} onChange={this.props.onFilter} />
        );
    }
}

export default ContactFilter;