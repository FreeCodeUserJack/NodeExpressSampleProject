console.log(__dirname)
console.log(__filename)
console.log(process)
// require, module, process are all example global variables

const myInterval = setInterval(() => {
  console.log('hello world')
}, 1000)

// clearInterval(myInterval)