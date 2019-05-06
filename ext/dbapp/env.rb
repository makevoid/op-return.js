require 'json'
require 'yaml'
require 'digest/sha2'
require 'bundler'
Bundler.require :default

DOCKER = File.exists? "/.dockerenv"

host = "localhost"
host = "database" if DOCKER

DB = Sequel.connect "postgres://postgres:foo@#{host}:5432/opreturn"
