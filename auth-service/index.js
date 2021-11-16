const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const publicUris = [
  '/products/:id'
];

app.get('/auth/users', (req, res) => {
  res.send('User list')
})

app.get('/auth/users/:id', (req, res) => {
  res.send('single user: ' + req.params.id)
})

app.post('/auth/_check', (req, res) => {
  if (!req.headers.authorization) {
    res.status(401).send('Missing authorization header');
  }

  let originalUri = req.headers['x-original-uri'];
  console.log(req.headers);
  // console.log(originalUri);

  const parts = req.headers.authorization.split(' ');

  if (parts.length !== 2) {
    return res.status(403).json({ error: 'Authentication format is Authorization: Bearer [token]' });
  }

  let scheme = parts[0];
  let token = parts[1];

  // console.log(scheme, token);

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(403).json({ error: 'Authentication format is Authorization: Bearer [token]' });
  }

  if (token === 'valid-auth') {
    return res.send('Authorized');
  }

  return res.status(401).send('Authorization failed');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})