const express = require('express');
const router = express.Router();
const { updateTask, deleteTask } = require('../controllers/taskController');
const { authenticateUser } = require('../middlewares/authMiddleware');

// Ruta para actualizar una tarea
router.put('/:id', authenticateUser, updateTask);

// Ruta para eliminar una tarea
router.delete('/:id', authenticateUser, deleteTask);

module.exports = router;
