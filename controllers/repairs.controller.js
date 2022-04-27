const { Repair } = require('../models/repair.model.js');

const getAllRepairs = async (req, res) => {
	try {
		const repairs = await Repair.findAll();

		res.status(200).json({ repairs });
	} catch (error) {
		console.log('Error getting repairs:', error);
	}
};

const createRepair = async (req, res) => {
	try {
		const {} = req.body;

		const newRepair = await Repair.create({});

		res.status(201).json({ newRepair });
	} catch (error) {
		console.log('Error creating repair:', error);
	}
};

const getRepairById = async (req, res) => {
	try {
		const { repair } = req;

		res.status(200).json({ repair });
	} catch (error) {
		console.log('Error getting repair:', error);
	}
};

const updateRepair = async (req, res) => {
	try {
		const { repair } = req;
		const { status, userId } = req.body;

		await repair.update({ status, userId });

		res.status(200).json({ status: 'Repair updated' });
	} catch (error) {
		console.log('Error updating repair:', error);
	}
};

const deleteRepair = async (req, res) => {
	try {
		const { repair } = req;

		await repair.update({ status: 'deleted' });

		res.status(200).json({ status: 'Repair deleted' });
	} catch (error) {
		console.log('Error deleting repair:', error);
	}
};

module.exports = {
	getAllRepairs,
	createRepair,
	getRepairById,
	updateRepair,
	deleteRepair,
};
