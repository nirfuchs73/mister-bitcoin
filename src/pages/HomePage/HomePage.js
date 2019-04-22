import React, { Component } from 'react';

import bitcoinService from '../../services/BitcoinService';
import userService from '../../services/UserService';
import coinsImg from '../../assets/icons/coins.png';
import bitcoinImg from '../../assets/icons/bitcoin.png'
import './HomePage.css'


class HomePage extends Component {
    state = {
        user: userService.getUser(),
        bitcoinRate: 0
    }

    async componentDidMount() {
        const bitcoinRate = await bitcoinService.getBitcoinRate(this.state.user.coins);
        this.setState({ bitcoinRate });
    }

    render() {
        return (
            <div className="home-page">
                <div className="user-details">
                    <div className="user-name">Hello {this.state.user.name}</div>
                    <div className="user-coins-count">
                        <img src={coinsImg} alt="coins" width="24px" height="24px"></img>Coins: {this.state.user.coins}
                    </div>
                    <div className="user-coins-rate">
                        <img src={bitcoinImg} alt="bitcoin" width="24px" height="24px" /> BTC: {this.state.bitcoinRate}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;