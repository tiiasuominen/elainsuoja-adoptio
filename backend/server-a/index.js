const express = require('express');
const { Pool } = require('pg');

const app = express();
const pool = new Pool({
  host: 'localhost',
  port: 5433,
  user: 'shelter',
  password: 'shelter',
  database: 'shelter',
});

app.get('/animals', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM animals ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Tietokantavirhe' });
  }
});

app.get('/animals/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM animals WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Eläintä ei löytynyt' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Tietokantavirhe' });
  }
});

app.listen(3000, () => {
  console.log('Palvelin käynnissä portissa 3000');
});