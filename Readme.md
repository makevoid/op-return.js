# Op Return JS

### OP Return example - Timestamp your PostgresSQL DB or your PoA Blockchian with an OP_RETURN on the bitcoin blockchain

At the moment it's the implementation is just REPL based, take a look at `op-return-repl.js`.

The implementation is basically an OP_RETURN transaction with Bitcore-Lib:

```js
const message = "0x1234567" // your Database or PoA Blockchain hash

const { utxos, pushTx } = require('blockchain-api-basic')

let utxoSet = await utxos(address)

const tx = new Transaction()
    .from(utxoSet)
    .addData(message)
    // ...
    .sign(pvtKey)

await pushtx(tx.serialize())
```

And essentially with a dozen of lines of bitcore-lib JS you can secure your PoA blockchain or blockchainify your app.

There is no need to write complex smart contracts or find the most popular or the most obscure blockchain to achieve immutable timestamping. With this and with backups made by every party involved in the system you should beat in development time all the other options available.

Enjoy

@makevoid
