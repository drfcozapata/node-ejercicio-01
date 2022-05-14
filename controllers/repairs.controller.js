const { Repair } = require('../models/repair.model.js');
const { catchAsync } = require('../utils/catchAsync');

const getAllCompletedRepairs = catchAsync(async (req, res, next) => {
  const repairs = await Repair.findAll({ where: { status: 'completed' } });

  res.status(200).json({
    repairs,
  });
});

const getAllPendingRepairs = catchAsync(async (req, res, next) => {
  const repairs = await Repair.findAll({ where: { status: 'pending' } });

  res.status(200).json({
    repairs,
  });
});

const createRepair = catchAsync(async (req, res, next) => {
  const { date, computerNumber, comments, userId } = req.body;

  const newRepair = await Repair.create({
    date,
    computerNumber,
    comments,
    userId,
  });

  res.status(201).json({
    newRepair,
  });
});

const getRepairById = catchAsync(async (req, res, next) => {
  const { repair } = req;

  res.status(200).json({
    repair,
  });
});

const completedRepair = catchAsync(async (req, res, next) => {
  const { repair } = req;

  await repair.update({
    status: 'completed',
  });

  res.status(200).json({
    status: 'Repair completed',
  });
});

const cancelRepair = catchAsync(async (req, res, next) => {
  const { repair } = req;

  await repair.update({
    status: 'cancelled',
  });

  res.status(200).json({
    status: 'Repair cancelled',
  });
});

module.exports = {
  getAllCompletedRepairs,
  getAllPendingRepairs,
  createRepair,
  getRepairById,
  completedRepair,
  cancelRepair,
};
