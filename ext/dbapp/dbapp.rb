require_relative 'env'
require_relative './db/db'

createDoc = -> {
  num = DB[:documents].count + 1
  DB[:documents].insert(
    title: "Test #{num}",
    content: "lorem ipsum content #{num}  "*5
  )
}

createDoc.()

loop {
  createDoc.()
  docs = []
  DB[:documents].each { |doc|
    puts doc.to_yaml
    docs << doc
  }
  docs_json = docs.to_json
  hash = Digest::SHA256.hexdigest docs_json
  json = {
    documents: docs,
    hash: hash # this hash should be saved in an OP_RETURN via `./bin/node-opreturn $HASH`
  }.to_json
  File.open("db/dump.json", "w"){ |f| f.write json }
  sleep 20
}
