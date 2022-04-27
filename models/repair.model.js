const { DataTypes } = require('sequelize');
const { db } = require('../utils/database.js');

const Repair = db.define(
	'repair',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		date: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
		},
		status: {
			type: DataTypes.STRING,
			defaultValue: 'pending',
		},
	},
	{
		timestamps: false,
	}
);

module.exports = { Repair };
