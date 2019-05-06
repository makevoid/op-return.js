require_relative 'env'

puts "add file"
resp = FS.add File.open(Pathname.new "Readme.md")
p resp

hash = resp.hashcode

puts "cat file"
files = FS.cat hash
p files
