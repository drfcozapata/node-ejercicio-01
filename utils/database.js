const { Sequelize } = require('sequelize');

const db = new Sequelize({
	dialect: 'postgres',
	host: 'localhost',
	username: 'drfcozapata',
	password: '1301',
	database: 'repairs',
	logging: false,
});

module.exports = { db };
