const express = require('express');

const { userExists } = require('../middlewares/users.middlewares.js');
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
} = require('../controllers/users.controller.js');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUserValidations, checkValidations, createUser);
router
  .route('/:id')
  .get(userExists, getUserById)
  .patch(userExists, updateUser)
  .delete(userExists, deleteUser);

module.exports = { usersRouter: router };
