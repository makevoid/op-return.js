const { readFileSync } = require('fs')
const { PrivateKey, Address, Transaction } = require('bitcore-lib')

const pvtKeyString = readFileSync(".privateKey").toString().trim()
const pvtKey = new PrivateKey(pvtKeyString)
console.log("Private key loaded")
console.log(`Address: ${pvtKey.toAddress().toString()}\n`)

console.log("Get UTXOs")
