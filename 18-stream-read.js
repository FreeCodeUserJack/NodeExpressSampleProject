const {writeFileSync, createReadStream} = require('fs')

function createBigFile() {
  for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big.txt', `Hello world #${i}\n`, {flag: 'a'})
  }
}

createBigFile()

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf8'});

stream.on('data', chunk => {
  console.log(chunk)
})