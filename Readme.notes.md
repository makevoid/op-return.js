Even if you're developer and you eat nodejs for breakfast, is possible that you won't be able to run this example as it will fail on `utxos` being empty (`[]`). 

How to fix that?

Let's start from the basics

### What is Bitcoin?

(simplified) Bitcoin is the currency for the web. 

### Why Bitcoin?

Bitcoin is not only the currency for the web but it's also an immutable database.

Wait... what?

Well, it turns out that to create a un-hackable currency for everyone you need to create a database which can't be changed after you've written data into it.

There's another piece to it (Proof of Work) but let's not focus on that for simplicity.

Let's just focus on the immutable database.

### Ok, but then... How do I run this code?

Well, it turns out that to write data into bitcoin you have to create and record a transaction. 

And as anti-spam mechanism to record a transaction you have to pay a fee, in bitcoin itself.

### What?

Are you telling me I have to pay money to run this thing?

Well.. yes, immutability comes at a price, you could use a "cheaper" PoW blockchain/cryptocurrency (and this code can be modified quite easily to do that) but Bitcoin is Bitcoin.

There is also the bitcoin testnet, bitcore-lib can be configured to write on that, so if you fancy, do that.

### Obtaining bitcoin

Obtaining bitcoin is a task I'll leave it to you, at this time (2019) there are many services/exchanges that will let you buy a little bit of bitcoin via credit card, for sending some transactions 1$ should be more than enough. If you live in a big city there's probably a bitcoin ATM around you. 

My suggested way to get some bitcoins to try bitcoin out is to ask a geeky friend of yours to give you some, as I said, 1$ is enough to make few transactions, make sure you use a very small fee.

### Create a private key

Run `./utils/createPvtKey.js` to create a Private key, a file will be created named `.privateKey`, make sure to back it up before loading your address.

### Loading your address

To run the op-return example you will need to deposit funds into your newly created Bitcoin address, as I said, don't put more than 1$ worth of BTCs if you're just trying this out. 
The address will be printed at the start of the program.
After the transaction will be confirmed you will be able to successfully write a message which will be saved forever, into the Bitcoin blockchain.


@makevoid
