const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Model
const { User } = require('../models/user.model');

// Utils
const { catchAsync } = require('../utils/catchAsync');
const { AppError } = require('../utils/appError');

dotenv.config((path = './config.env'));

const userExists = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findOne({ where: { id } });

  if (!user) {
    return next(new AppError('No user found with the given id', 404));
  }

  req.user = user;
  next();
});

const protectToken = catchAsync(async (req, res, next) => {
  // Extracting token from header
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(new AppError('You are not logged in!', 401));
  }

  // Validate token
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findOne({
    where: { id: decoded.id },
    status: 'active',
  });

  if (!user) {
    return next(
      new AppError('The owner of this token is not longer available', 403)
    );
  }

  req.sessionUser = user;
  next();
});

const protectEmployees = catchAsync(async (req, res, next) => {
  if (req.sessionUser.role !== 'employee' && req.sessionUser.role !== 'admin') {
    return next(
      new AppError(
        'Forbidden. Access permited only to employess and the admin!',
        403
      )
    );
  }

  next();
});

const protectAccountOwner = catchAsync(async (req, res, next) => {
  const { sessionUser, user } = req;
  if (sessionUser.id !== user.id && sessionUser.role !== 'admin') {
    return next(
      new AppError(
        'Forbidden. Access permited only to owner or the admin!',
        403
      )
    );
  }

  next();
});

module.exports = {
  userExists,
  protectToken,
  protectEmployees,
  protectAccountOwner,
};
