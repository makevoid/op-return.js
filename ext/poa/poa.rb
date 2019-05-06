require_relative 'env'

CONTRACT.transact.set "rand-#{rand 10}"
sleep 1
value = CONTRACT.call.get
puts value
