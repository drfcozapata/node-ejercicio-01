const express = require('express');

// Middlewares
const { repairExists } = require('../middlewares/repairs.middlewares.js');
const {
  protectEmployees,
  protectToken,
} = require('../middlewares/users.middlewares.js');
const {
  createRepairValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

// Controllers
const {
  getAllCompletedRepairs,
  getAllPendingRepairs,
  createRepair,
  getRepairById,
  completedRepair,
  cancelRepair,
} = require('../controllers/repairs.controller.js');

const router = express.Router();

router.use(protectToken);

router.get('/completed', protectEmployees, getAllCompletedRepairs);
router.get('/pending', protectEmployees, getAllPendingRepairs);
router.get('/:id', protectEmployees, repairExists, getRepairById);
router.post('/', createRepairValidations, checkValidations, createRepair);

router
  .use('/:id', protectEmployees, repairExists)
  .route('/:id')
  .patch(completedRepair)
  .delete(cancelRepair);

module.exports = { repairsRouter: router };
