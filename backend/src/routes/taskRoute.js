import express from 'express';
import ControllerTasks from '../controller/controllerTasks.js';
import { PostTask, PutTask, TaskId } from '../middleware/task.js'

const tasks = new ControllerTasks();

const router = express.Router();

router.get('/task', tasks.getAllTasks);
router.post('/task', PostTask, tasks.addTask);
router.put('/task/:id', PutTask, tasks.updateTask);
router.delete('/task/:id', TaskId, tasks.deleteTask);
router.get('/task/:id', TaskId, tasks.getTaskById);

export default router;