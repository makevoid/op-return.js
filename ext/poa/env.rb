require 'bundler'
Bundler.require :default

DOCKER = File.exists? "/.dockerenv"

host = "localhost"
host = "parity" if DOCKER

ETH = Ethereum::HttpClient.new "http://#{host}:8545"

CONTRACT = Ethereum::Contract.create file: "store.sol", client: ETH
address = CONTRACT.deploy_and_wait
puts "new contract: #{address}"
