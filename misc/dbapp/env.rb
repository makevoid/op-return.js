require 'json'
require 'yaml'
require 'bundler'
Bundler.require :default

# DB = Sequel.connect "postgres://postgres:foo@database/opreturn"
DB = Sequel.connect "postgres://postgres:foo@localhost:5432/opreturn"
