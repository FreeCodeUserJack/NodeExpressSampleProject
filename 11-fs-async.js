const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  console.log(result);

  const first = result;
  readFile('./content/second.txt', 'utf8', (err2, result2) => {
    if (err2) {
      console.log(err2)
      return null;
    }
    console.log(result2);

    const second = result2;
    writeFile('./content/third.txt', `Third file combines first and second: ${first}: ${second}`, (err3) => {
      if (err3) {
        console.log(err);
        return null;
      }

      console.log("write complete");
    })
  })
})

console.log("async log")