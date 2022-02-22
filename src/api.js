const url = `https://api.coincap.io/v2`;

function getAssets() {
    return fetch(`${url}/assets?limit=20`).then(res => res.json()).then(res => res.data)
}

function getAsset(coin_id) {
    return fetch(`${url}/assets/${coin_id}`).then(res => res.json()).then(res => res.data);
}

function getAssetHistory(coin_id) {
    const now = new Date();
    const end = now.getTime();
    now.setDate(now.getDate() - 1);
    const start = now.getTime();
    return fetch(`${url}/assets/${coin_id}/history?interval=h1&start=${start}&end=${end}`).then(res => res.json()).then(res => res.data);
}

function getMarkets(coin_id) {
    return fetch(`${url}/assets/${coin_id}/markets?limit=5`).then(res => res.json()).then(res => res.data);
}

function getExchange(exchange_id) {
    return fetch(`${url}/exchanges/${exchange_id}`)
    .then(res => res.json())
    .then(res => res.data)
}

export default {
    getAssets, getAsset, getAssetHistory, getMarkets, getExchange
} 