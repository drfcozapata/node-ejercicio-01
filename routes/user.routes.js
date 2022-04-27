const express = require('express');

const {
	getAllUsers,
	createUser,
} = require('../controllers/users.controller.js');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.patch('/:id');
router.delete('/:id');
router.get('/:id');

module.exports = { usersRouter: router };
