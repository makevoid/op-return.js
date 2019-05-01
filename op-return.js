const { readFileSync } = require('fs')
const { PrivateKey, Address, Transaction } = require('bitcore-lib')
const { balance, utxos, pushTx } = require('blockchain-api-basic')
const convertUtxos = require('./utils/convertUtxos')


const pvtKeyString = readFileSync(".privateKey").toString().trim()
const pvtKey = new PrivateKey(pvtKeyString)
const address = pvtKey.toAddress().toString()
console.log("Private key loaded")
console.log(`Address: ${address}\n`)

const axios = require('axios')
const qs = require('querystring')

const pushtx = async (txHex) => {
  const url = 'https://blockchain.info/pushtx'
  const resp = await axios.post(url, qs.stringify({
    tx: txHex,
  }))
  return resp.body.data
}

;(async () => {

  try {
    const bal = await balance(address)
    console.log(`Balance: ${bal} (sat)\n`)

    // process.exit() // ---------------------------------------

    console.log("Get UTXOs from bchain.info:")
    let utxoSet = await utxos(address)

    console.log(utxoSet)
    console.log("\n")

    if (utxoSet.length == 0) process.exit()

    // SELECTION
    const txHash = '23744c7cf98d0a98ad08ff7aee10f096aa42da0371234c8514574fec67c5ddde'

    utxoSet = utxoSet.filter((utxo) => {
      return utxo.tx_hash == txHash
    })

    utxoSet = convertUtxos(utxoSet)
    console.log("UTXO, selected and converted for bitcore")
    console.log(utxoSet)
    console.log("\n")

    // process.exit() // ---------------------------------------

    const amount = 1000

    const tx = new Transaction()
        .from(utxoSet)
        .to(address, amount)
        .change(address)
        .fee(10000)
        .addData("hello world")
        .sign(pvtKey)
        // .fee(5430) // minimum - works on bsv

    const txHex = tx.serialize()

    console.log("TX serialized:")
    console.log(txHex)
    console.log("\n")

    // process.exit() // ---------------------------------------

    console.log("Broadcasting TX...\n")
    const resp = await pushtx(txHex)
    console.log("response:")
    console.log(resp)

  } catch (err) {
    console.log("Caught an Error")
    console.error(err)
    console.log("exiting...")
  }

})()
