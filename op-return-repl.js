const { readFileSync } = require('fs')
const { PrivateKey, Address, Transaction } = require('bitcore-lib')
const { balance, utxos, pushTx } = require('blockchain-api-basic')
const convertUtxos = require('./utils/convertUtxos')
const reader = require("readline-sync")


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
  return resp.body
}

;(async () => {

  try {
    const bal = await balance(address)
    console.log(`Balance: ${bal} (sat)\n`)

    // process.exit() // ---------------------------------------

    console.log("Get UTXOs from bchain.info:")
    let utxoSet = await utxos(address)

    utxoSet.map((utxo, idx) => {
      console.log(`UTXO #${idx}:`)
      console.log(`hash: ${utxo.tx_hash_big_endian}`)
      console.log(`value: ${utxo.value}`)
      console.log(`confs: ${utxo.confirmations}\n`)
    })
    console.log('')

    if (utxoSet.length == 0) process.exit()

    const utxoSelection = reader.question("Select UTXO: ")
    console.log("\n")

    utxoSet = [ utxoSet[new Number(utxoSelection)] ]

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
        .addData("hello world")
        .fee(1000)
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
    if (err.response){
      console.error(err.response.statusText)
      console.error(err.response.data)
    } else {
      console.error(err)
    }
    console.log("exiting...")
  }

})()
