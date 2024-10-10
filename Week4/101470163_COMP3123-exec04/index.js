const express = require('express');
const app = express();
const port = 3000;

// Rutas

//return "Hello Express JS"
app.get('/hello', (req, res) => {
  res.send('Hello Express JS');
});

//  query string
app.get('/user', (req, res) => {
  const firstname = req.query.firstname || 'liz';
  const lastname = req.query.lastname || 'cruz';
  res.json({ firstname: firstname, lastname: lastname });
});

// path
app.post('/user/:firstname/:lastname', (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname: firstname, lastname: lastname });
});

// start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
