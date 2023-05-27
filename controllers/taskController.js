const Task = require('../models/task');

const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const userId = req.user.id; // Suponiendo que tienes un middleware de autenticación que agrega el ID del usuario al objeto `req.user`

  try {
    // Buscar la tarea por ID
    const task = await Task.findById(taskId);

    // Verificar si la tarea existe y si el usuario es el mismo que la creó
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    if (task.userId !== userId) {
      return res.status(401).json({ error: 'No tienes permiso para actualizar esta tarea' });
    }

    // Actualizar la tarea
    task.title = req.body.title;
    task.description = req.body.description;
    const updatedTask = await task.save();

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la tarea' });
  }
};

const deleteTask = async (req, res) => {
  const taskId = req.params.id;
  const userId = req.user.id; // Suponiendo que tienes un middleware de autenticación que agrega el ID del usuario al objeto `req.user`

  try {
    // Buscar la tarea por ID
    const task = await Task.findById(taskId);

    // Verificar si la tarea existe y si el usuario es el mismo que la creó
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }

    if (task.userId !== userId) {
      return res.status(401).json({ error: 'No tienes permiso para eliminar esta tarea' });
    }
    

    // Eliminar la tarea
    await task.remove();

    res.json({ message: 'Tarea eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
};

module.exports = {
  updateTask,
  deleteTask,
};
