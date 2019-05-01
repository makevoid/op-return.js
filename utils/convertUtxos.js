const convertUtxos = (utxos) => {
  const utxo = utxos[0]
  return {
    txId: utxo.tx_hash,
    vout: utxo.tx_output_n,
    scriptPubKey: utxo.script,
    amount: utxo.value,
  }
}

module.exports = convertUtxos
