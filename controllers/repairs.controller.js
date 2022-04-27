const { Repair } = require('../models/repair.model.js');

const getAllRepairs = async (req, res) => {
	const repairs = await Repair.findAll();

	res.status(200).json({ repairs });
};

const createRepair = async (req, res) => {
	const {} = req.body;

	const newRepair = await Repair.create({});

	res.status(201).json({ newRepair });
};

module.exports = { getAllRepairs, createRepair };
