const express = require('express');
const { getAllTasks, createTask, deleteTask, getTask, updateTask } = require('../controllers/tasks');
const router = express.Router();

// router.get('/', getAllTasks)
// router.post('/', createTask)
// router.get('/:id', getTask)
// router.patch('/:id', updateTask)
// router.delete('/:id', deleteTask)


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
module.exports = router;