import React, { Component } from 'react';

import HomePage from './pages/HomePage';
import StatisticPage from './pages/StatisticPage';
import ContactPage from './pages/ContactPage';


class App extends Component {
    render() {
        return (
            <div className="App">
                {/* <HomePage /> */}
                {/* <StatisticPage /> */}
                <ContactPage />
            </div>
        );
    }
}

export default App;
