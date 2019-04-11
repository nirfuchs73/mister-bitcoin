import axios from 'axios';


export default {
    getBitcoinRate,
    // getMarketPrice,
    // getConfirmedTransactions,
    // watchBitcoinRate
}

function getBitcoinRate(dollars = 1) {
    var url = `https://blockchain.info/tobtc?currency=USD&value=${dollars}`;
    return axios.get(url)
        .then(res => res.data);
}