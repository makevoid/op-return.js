require_relative 'env'

DB.create_table :documents do
  primary_key :id
  String :title,   null: false
  String :content, null: false
end unless DB.table_exists?(:documents)

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
  json = docs.to_json
  puts json
  File.open("dump.json", "r"){ |f| f.write json }
  sleep 20
end
