import React, { Component } from 'react';

import { BrowserRouter, HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import HomePage from './pages/HomePage';
import StatisticPage from './pages/StatisticPage';
import ContactPage from './pages/ContactPage';
import ContactDetailsPage from './pages/ContactDetailsPage';
import ContactEditPage from './pages/ContactEditPage';

import './App.css';

import homeImg from './assets/icons/home.png';
import increaseImg from './assets/icons/increase.png';
import usersImg from './assets/icons/users.png';

const App = () => (
    <div className="jumbotron text-center">
        <HashRouter>
            <div className="container text-center">
                <nav>
                    <ul>
                        <NavLink className="Nav_link" activeClassName="activeRoute" to="/">
                            <img src={homeImg} alt="Home" width="40" height="40" />
                        </NavLink>
                        <NavLink className="Nav_link" activeClassName="activeRoute" to="/contact">
                            <img src={usersImg} alt="Contacts" width="40" height="40" />
                        </NavLink>
                        <NavLink className="Nav_link" activeClassName="activeRoute" to="/statistic">
                            <img src={increaseImg} alt="Statistic" width="40" height="40" />
                        </NavLink>
                        {/* <NavLink className="Nav_link" activeClassName="activeRoute" to="/details">Details</NavLink> */}
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route exact path="/contact/:id" component={ContactDetailsPage} />
                <Route path="/statistic" component={StatisticPage} />
                <Route path="/contact/edit/:id?" component={ContactEditPage} />
            </Switch>
        </HashRouter>
    </div>
);

export default App;
