const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');
const { registerValidation } = require('../middlewares/validationMiddleware');

// Ruta de registro (register route)
router.post('/register', registerValidation, registerUser);

module.exports = router;
