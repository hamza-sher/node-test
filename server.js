const http =require('http')
const express = require('express')
const app = express()
const server  = http.createServer(app)
const port = 3000 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})