const convertUtxos = (utxos) => {
  const utxo = utxos[0]
  return {
    txId: utxo.tx_hash_big_endian,
    vout: utxo.tx_output_n,
    scriptPubKey: utxo.script,
    satoshis: utxo.value,
  }
}

module.exports = convertUtxos
