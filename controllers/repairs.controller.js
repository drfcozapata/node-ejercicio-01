const { Repair } = require('../models/repair.model.js');

const getAllRepairs = async (req, res) => {
  try {
    const repairs = await Repair.findAll({ where: { status: 'pending' } });

    res.status(200).json({
      repairs,
    });
  } catch (error) {
    console.log('Error getting repairs:', error);
  }
};

const createRepair = async (req, res) => {
  try {
    const { userId, date, computerNumber, comments } = req.body;

    const newRepair = await Repair.create({
      userId,
      date,
      computerNumber,
      comments,
    });

    res.status(201).json({
      newRepair,
    });
  } catch (error) {
    console.log('Error creating repair:', error);
  }
};

const getRepairById = async (req, res) => {
  try {
    const { repair } = req;

    res.status(200).json({
      repair,
    });
  } catch (error) {
    console.log('Error getting repair:', error);
  }
};

const completedRepair = async (req, res) => {
  try {
    const { repair } = req;

    await repair.update({ status: 'completed' });

    res.status(200).json({ status: 'Repair completed' });
  } catch (error) {
    console.log('Error updating repair:', error);
  }
};

const cancelRepair = async (req, res) => {
  try {
    const { repair } = req;

    await repair.update({ status: 'cancelled' });

    res.status(200).json({ status: 'Repair cancelled' });
  } catch (error) {
    console.log('Error deleting repair:', error);
  }
};

module.exports = {
  getAllRepairs,
  createRepair,
  getRepairById,
  completedRepair,
  cancelRepair,
};
