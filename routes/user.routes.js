const express = require('express');

const { userExists } = require('../middlewares/users.middlewares.js');

const {
	getAllUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
} = require('../controllers/users.controller.js');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router
	.route('/:id')
	.get(userExists, getUserById)
	.patch(userExists, updateUser)
	.delete(userExists, deleteUser);

module.exports = { usersRouter: router };
