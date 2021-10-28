const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Catalog Service!')
})

app.get('/products', (req, res) => {
  res.json([
    {
      "id": 1,
      "name": "Lettuce - Romaine",
      "price": "$203.53",
      "stock": "outstock",
      "net_sold": 15,
      "revenue": "$558.38"
    }, 
    {
      "id": 2,
      "name": "Chicken - Wieners",
      "price": "$526.59",
      "stock": "instock",
      "net_sold": 39,
      "revenue": "$217.09"
    }, 
    {
      "id": 3,
      "name": "Beer - Camerons Auburn",
      "price": "$547.45",
      "stock": "instock",
      "net_sold": 71,
      "revenue": "$125.02"
    }, 
    {
      "id": 4,
      "name": "Apple - Delicious, Red",
      "price": "$799.90",
      "stock": "instock",
      "net_sold": 38,
      "revenue": "$422.69"
    }, 
    {
      "id": 5,
      "name": "Salt - Seasoned",
      "price": "$138.74",
      "stock": "instock",
      "net_sold": 86,
      "revenue": "$908.19"
    }, 
    {
      "id": 6,
      "name": "Mushrooms - Honey",
      "price": "$764.15",
      "stock": "outstock",
      "net_sold": 62,
      "revenue": "$138.17"
    }, 
    {
      "id": 7,
      "name": "Salt And Pepper Mix - White",
      "price": "$506.47",
      "stock": "instock",
      "net_sold": 25,
      "revenue": "$952.64"
    }, 
    {
      "id": 8,
      "name": "Bread - Hamburger Buns",
      "price": "$163.99",
      "stock": "outstock",
      "net_sold": 43,
      "revenue": "$540.92"
    }, 
    {
      "id": 9,
      "name": "Beef - Eye Of Round",
      "price": "$676.56",
      "stock": "instock",
      "net_sold": 51,
      "revenue": "$378.77"
    }, 
    {
      "id": 10,
      "name": "Extract - Vanilla,artificial",
      "price": "$626.52",
      "stock": "outstock",
      "net_sold": 54,
      "revenue": "$178.23"
    }
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})