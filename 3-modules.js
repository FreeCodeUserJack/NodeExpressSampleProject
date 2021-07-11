// Modules

const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')

const alternateFlavor = require('./6-alternate-flavor')

require('./7-mind-grenade')

// console.log(names)

sayHi("john")
sayHi(john)
sayHi(peter)

for (let item of alternateFlavor.items) {
  sayHi(item)
}

sayHi(alternateFlavor.singlePerson.name)