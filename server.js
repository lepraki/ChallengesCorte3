const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear el cuerpo de las peticiones como JSON
app.use(express.json());

// Rutas
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});