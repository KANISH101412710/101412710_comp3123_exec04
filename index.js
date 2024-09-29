const express = require('express');
const app = express();
const port = 3000;

// GET request to /hello
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});

// GET request to /user
app.get('/user', (req, res) => {
  const { firstname = 'Pritesh', lastname = 'Patel' } = req.query;
  res.json({ firstname, lastname });
});

// POST request to /user/:firstname/:lastname
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
