// index.js
const express = require('express');
const cors = require('cors');
const pool = require('./dbConfig');

const app = express();
const PORT = 3000;

// Usar CORS para permitir el acceso desde cualquier origen
app.use(cors());

// Middleware para manejar JSON
app.use(express.json());

app.get('/gatos', (req, res) => {
  pool.query('SELECT * FROM gatos', (error, results) => {
    if (error) {
      console.error('Error al obtener los datos:', error);
      return res.status(500).send('Error al obtener los datos');
    }
    res.json(results);
  });
});

// Endpoint para agregar un nuevo gato
app.post('/gatos', (req, res) => {
  const { nombre, edad, raza } = req.body;
  
  if (!nombre || !edad || !raza) {
    return res.status(400).send('Todos los campos son obligatorios');
  }

  pool.query('INSERT INTO gatos (nombre, edad, raza) VALUES (?, ?, ?)', [nombre, edad, raza], (error, results) => {
    if (error) {
      console.error('Error al insertar los datos:', error);
      return res.status(500).send('Error al insertar los datos');
    }
    res.status(201).send('Gato agregado correctamente');
  });
});

app.listen(PORT, () => {
  console.log(`Servidor levantado en el puerto ${PORT}`);
});
