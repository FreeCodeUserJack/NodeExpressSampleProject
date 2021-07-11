const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === '/') {
    res.end("hello from end func")
  }
  else if (req.url === '/about') {
    res.end("/about section is under maintenance")
  }
  else {res.end(`<h1>Not Found</h1>
    <p>Can't find page looking for</p>
    <a href="/">Back home</a>`)
  }
})

server.listen(8000);