const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age) => {
  console.log(`data received ${name} : ${age}`);
})

customEmitter.on('response', () => {
  console.log(`data received #2 `);
})

customEmitter.emit('response', 'john', 31)