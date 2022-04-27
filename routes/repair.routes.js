const express = require('express');

const { repairExists } = require('../middlewares/repairs.middlewares.js');

const {
	getAllRepairs,
	createRepair,
	getRepairById,
	updateRepair,
	deleteRepair,
} = require('../controllers/repairs.controller.js');

const router = express.Router();

router.route('/').get(getAllRepairs).post(createRepair);
router
	.use('/:id', repairExists)
	.route('/:id')
	.get(getRepairById)
	.patch(updateRepair)
	.delete(deleteRepair);

module.exports = { repairsRouter: router };
