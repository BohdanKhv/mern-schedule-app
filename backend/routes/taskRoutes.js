const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
    getAllCompanyTaskLists,
    getAllUserTaskLists,
    createTaskList,
    updateTaskList,
    deleteTaskList,
} = require('../controllers/task/taskListControllers');

const {
    getAllTasksForList,
    getRecentUserTasks,
    deleteTask,
} = require('../controllers/task/taskControllers');


// Task List Routes
router.route('/list/company')
    .get(protect, getAllCompanyTaskLists);

router.route('/list/user')
    .get(protect, getAllUserTaskLists);

router.route('/list/')
    .post(protect, createTaskList);

router.route('/list/:id')
    .put(protect, updateTaskList)
    .delete(protect, deleteTaskList);


// Task Routes
router.route('/task/:taskListId')
    .get(getAllTasksForList);

router.route('/task/')
    .get(protect, getRecentUserTasks)

router.route('/task/:id')
    .delete(protect, deleteTask);


module.exports = router;