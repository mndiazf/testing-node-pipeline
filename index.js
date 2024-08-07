// index.js
const express = require('express');
const cors = require('cors');
const pool = require('./dbConfig');

const app = express();
const PORT = 3000;

// Usar CORS para permitir el acceso desde cualquier origen
app.use(cors());

app.get('/gatos', (req, res) => {
  pool.query('SELECT * FROM gatos', (error, results) => {
    if (error) {
      console.error('Error al obtener los datos:', error);
      return res.status(500).send('Error al obtener los datos');
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
});
