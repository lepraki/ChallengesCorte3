const User = require('../models/user');

const registerUser = (req, res) => {
  const { username, email, password } = req.body;

  // Crear una nueva instancia de usuario
  const newUser = new User({
    username,
    email,
    password,
  });

  // Guardar el usuario en la base de datos
  newUser.save()
    .then(() => {
      res.status(201).json({ message: 'Usuario registrado con éxito' });
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error al registrar el usuario' });
    });
};

module.exports = {
  registerUser,
};
