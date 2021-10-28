const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Auth Service!')
})

app.get('/users', (req, res) => {
  res.json([
    { "id": 1, "first_name": "Kean", "last_name": "Frankish", "email": "kfrankish0@mashable.com", "gender": "Genderfluid", "ip_address": "156.36.0.163" },
    {"id":2,"first_name":"Pip","last_name":"Chalke","email":"pchalke1@nhs.uk","gender":"Polygender","ip_address":"130.143.56.3"},
    {"id":3,"first_name":"Allianora","last_name":"Blose","email":"ablose2@narod.ru","gender":"Non-binary","ip_address":"147.249.47.210"},
    {"id":4,"first_name":"Cal","last_name":"Ludlam","email":"cludlam3@photobucket.com","gender":"Genderqueer","ip_address":"29.255.183.35"},
    {"id":5,"first_name":"Anastasia","last_name":"Tees","email":"atees4@unicef.org","gender":"Polygender","ip_address":"72.184.137.100"},
    {"id":6,"first_name":"Jewell","last_name":"Grouer","email":"jgrouer5@abc.net.au","gender":"Agender","ip_address":"139.153.245.2"},
    {"id":7,"first_name":"Sigfried","last_name":"Hanselman","email":"shanselman6@apple.com","gender":"Female","ip_address":"48.94.104.167"},
    {"id":8,"first_name":"Louis","last_name":"Pleasaunce","email":"lpleasaunce7@themeforest.net","gender":"Bigender","ip_address":"71.223.234.79"},
    {"id":9,"first_name":"Cassondra","last_name":"Tuffin","email":"ctuffin8@yellowbook.com","gender":"Male","ip_address":"60.243.56.58"},
    { "id": 10, "first_name": "Ric", "last_name": "Danniell", "email": "rdanniell9@acquirethisname.com", "gender": "Male", "ip_address": "165.98.186.238" }
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})