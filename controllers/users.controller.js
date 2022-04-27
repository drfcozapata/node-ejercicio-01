const { User } = require('../models/user.model.js');

const getAllUsers = async (req, res) => {
	try {
		const users = await User.findAll();

		res.status(200).json({ users });
	} catch (error) {
		console.log('Error getting users:', error);
	}
};

const createUser = async (req, res) => {
	try {
		const { name, email, password, role } = req.body;

		const newUser = await User.create({ name, email, password, role });

		res.status(201).json({ newUser });
	} catch (error) {
		console.log('Error creating users:', error);
	}
};

const getUserById = async (req, res) => {
	try {
		const { user } = req;

		res.status(200).json({ user });
	} catch (error) {
		console.log('Error getting user:', error);
	}
};

const updateUser = async (req, res) => {
	try {
		const { user } = req;
		const { name, email, password, role } = req.body;

		await user.update({ name, email, password, role });

		res.status(200).json({ status: 'User updated' });
	} catch (error) {
		console.log('Error updating user:', error);
	}
};

const deleteUser = async (req, res) => {
	try {
		const { user } = req;

		await user.update({ status: 'deleted' });

		res.status(200).json({ status: 'User deleted' });
	} catch (error) {
		console.log('Error deleting user:', error);
	}
};

module.exports = {
	getAllUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
};
