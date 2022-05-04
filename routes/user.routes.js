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

router
  .route('/')
  .get(getAllUsers)
  .post(createUserValidations, checkValidations, createUser);
router
  .use('/:id', userExists)
  .route('/:id')
  .get(getUserById)
  .patch(updateUser)
  .delete(deleteUser);

module.exports = { usersRouter: router };
