const { DataTypes } = require('sequelize');
const { db } = require('../utils/database.js');
const { Repair } = require('./repair.model.js');

const User = db.define(
	'user',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		role: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		status: {
			type: DataTypes.STRING,
			defaultValue: 'active',
		},
	},
	{
		timestamps: false,
	}
);

User.hasMany(Repair, { foreignKey: 'userId', sourceKey: 'id' });

Repair.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });

module.exports = { User };
