const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Auth Service!')
})

app.get('/users', (req, res) => {
  res.send('User list')
})

app.get('/users/:id', (req, res) => {
  res.send('single user: ' + req.params.id)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})