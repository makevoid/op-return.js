const axios = require('axios')
const qs = require('querystring')

const pushTx = async (txHex) => {
  const url = 'https://blockchain.info/pushtx'
  const resp = await axios.post(url, qs.stringify({
    tx: txHex,
  }))
  return resp.body
}

module.exports = pushTx
