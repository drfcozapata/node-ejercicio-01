const express = require('express');

const { repairExists } = require('../middlewares/repairs.middlewares.js');
const {
  createRepairValidations,
  checkValidations,
} = require('../middlewares/validations.middlewares');

const {
  getAllCompletedRepairs,
  getAllPendingRepairs,
  createRepair,
  getRepairById,
  completedRepair,
  cancelRepair,
} = require('../controllers/repairs.controller.js');

const router = express.Router();

router.get('/completed', getAllCompletedRepairs);
router.get('/pending', getAllPendingRepairs);
router.post('/', createRepairValidations, checkValidations, createRepair);

router
  .use('/:id', repairExists)
  .route('/:id')
  .get(getRepairById)
  .patch(completedRepair)
  .delete(cancelRepair);

module.exports = { repairsRouter: router };
