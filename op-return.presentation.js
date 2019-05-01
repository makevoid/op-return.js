const { readFileSync } = require('fs')
const { PrivateKey, Address, Transaction } = require('bitcore-lib')






const pvtKeyString = readFileSync(".privateKey").toString().trim()
const pvtKey = new PrivateKey(pvtKeyString)
const address = pvtKey.toAddress().toString()





console.log("Private key loaded")
console.log(`Address: ${address}\n`)

console.log("Get UTXOs")
;(async () => {
  const bal = await balance(address)
  console.log("balance:", bal)
  // => balance: 9754600 (satoshis)
})()
