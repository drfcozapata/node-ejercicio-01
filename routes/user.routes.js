const express = require('express');

// Middlewares
const {
  userExists,
  protectToken,
  protectEmployees,
  protectAccountOwner,
} = require('../middlewares/users.middlewares.js');
const {
  createUserValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  login,
  checkToken,
} = require('../controllers/users.controller.js');

const router = express.Router();

router.post('/', createUserValidations, checkValidations, createUser);
router.post('/login', login);

// Apply ProtectToken middleware
router.use(protectToken);

router.get('/check-token', checkToken);

router.get('/', protectEmployees, getAllUsers);
router.get('/:id', protectEmployees, userExists, getUserById);

router.patch('/:id', userExists, protectAccountOwner, updateUser);
router.delete('/:id', userExists, protectAccountOwner, deleteUser);

module.exports = { usersRouter: router };
