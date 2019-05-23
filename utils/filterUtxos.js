const filterUtxos = (utxos) => (
  utxos.filter((utxo) => (
    utxo.value > 1000
  ))
)

module.exports = filterUtxos
