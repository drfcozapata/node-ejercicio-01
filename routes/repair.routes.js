const express = require('express');

const {
	getAllRepairs,
	createRepair,
} = require('../controllers/repairs.controller.js');

const router = express.Router();

router.get('/', getAllRepairs);
router.post('/', createRepair);
router.patch('/:id');
router.delete('/:id');
router.get('/:id');

module.exports = { repairsRouter: router };
