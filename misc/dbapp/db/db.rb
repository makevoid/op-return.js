DB.create_table :documents do
  primary_key :id
  String :title,   null: false
  String :content, null: false
end unless DB.table_exists?(:documents)

DB.create_table :documents do
  primary_key :id
  String :title,   null: false
  String :content, null: false
end unless DB.table_exists?(:documents)
