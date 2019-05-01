const { writeFileSync } = require('fs')
const { PrivateKey, Address } = require('bitcore-lib')

const pvtKey = new PrivateKey()
console.log("Private key generated")
console.log(`Address: ${pvtKey.toAddress().toString()}`)
writeFileSync(".privateKey", pvtKey.toString())
