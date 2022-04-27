const express = require('express');
const { db } = require('./utils/database.js');
const { usersRouter } = require('./routes/user.routes.js');
const { repairsRouter } = require('./routes/repair.routes.js');

const app = express();
app.use(express.json());
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

const { User } = require('./models/user.model.js');
const { Repair } = require('./models/repair.model.js');

async function main() {
	try {
		await db.authenticate();
		console.log('Connection has been established successfully.');

		await db.sync();
		console.log('Database has been synced successfully.');

		const PORT = 4002;
		app.listen(PORT, () => {
			console.log(`Express Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}
main();
