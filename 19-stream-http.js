const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {
  // const text = fs.readFileSync('./content/big.txt', 'utf8')
  // res.end(text)

  const fileStream = fs.createReadStream('./content/big.txt', 'utf8')

  fileStream.on('open', (fd) => {
    console.log(fd)
    fileStream.pipe(res)
  })

  fileStream.on('error', (err) => {
    res.end(err)
  })
})

server.listen(8000)