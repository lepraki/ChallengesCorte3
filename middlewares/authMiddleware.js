const authenticateUser = (req, res, next) => {
  // Verificar si el usuario está autenticado
  if (!req.isAuthenticated()) {
    return res.status(401).json({ error: 'Acceso no autorizado' });
  }

  // Obtener el ID del usuario autenticado
  const userId = req.user.id;

  // Guardar el ID del usuario en el objeto req.user
  req.user = {
    id: userId,
  };

  next();
};

module.exports = {
  authenticateUser,
};
