import React, { Component } from 'react';

import { BrowserRouter, HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

import HomePage from './pages/HomePage';
import StatisticPage from './pages/StatisticPage';
import ContactPage from './pages/ContactPage';
import ContactDetails from './pages/ContactDetails';

import './App.css';

const App = () => (
    <div className="jumbotron text-center">
        <BrowserRouter>
            <div className="container text-center">
                <nav>
                    <ul>
                        <NavLink className="Nav_link" activeClassName="activeRoute" to="/home">Home </NavLink>
                        <NavLink className="Nav_link" activeClassName="activeRoute" to="/statistic">Ctatistic </NavLink>
                        <NavLink className="Nav_link" activeClassName="activeRoute" to="/contact">Contacts </NavLink>
                        <NavLink className="Nav_link" activeClassName="activeRoute" to="/details">Details</NavLink>
                    </ul>
                </nav>
            </div>
            {/* <h1>Main Page</h1> */}

            <Switch>
                <Route exact path="/home" component={HomePage} />
                <Route path="/statistic" component={StatisticPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route path="/details" component={ContactDetails} />
            </Switch>
            {/* <h3>Page footer</h3> */}
        </BrowserRouter>
    </div>
);

// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 {/* <HomePage /> */}
//                 {/* <StatisticPage /> */}
//                 {/* <ContactPage /> */}
//                 <ContactDetails />
//             </div>
//         );
//     }
// }

export default App;
