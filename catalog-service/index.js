const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/products', (req, res) => {
  res.send('List of products');
})

app.get('/products/:id', (req, res) => {
  res.send('single product: ' + req.params.id)
})

app.get('/categories', (req, res) => {
  res.send('list of categories')
})

app.get('/categories/:id', (req, res) => {
  res.send('single category: ' + req.params.id)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})