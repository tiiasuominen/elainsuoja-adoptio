const express = require('express');
const app = express();

const animals = [
  { id: 1, name: 'Munis', type: 'kissa', age: 7 },
  { id: 2, name: 'Minttu', type: 'koira', age: 13 },
  { id: 3, name: 'Vikke', type: 'koira', age: 5 },
];

app.get('/animals', (req, res) => {
  res.json(animals);
});

app.listen(3000, () => {
  console.log('Palvelin käynnissä portissa 3000');
});