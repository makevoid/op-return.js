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

loop do
  createDoc.()
  docs = []
  DB[:documents].each do |doc|
    puts doc.to_yaml
    docs << doc
  end
  DB[:documents].each do |doc|
  json = docs.to_json
  puts json
  File.open("dump.json", "r"){ |f| f.write json }
  sleep 20
end
