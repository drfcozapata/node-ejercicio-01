const { app } = require('./app');

// Models
const { User } = require('./models/user.model.js');
const { Repair } = require('./models/repair.model.js');

// Utils
const { db } = require('./utils/database.js');

// Authentication of DB credentials
db.authenticate()
  .then(() =>
    console.log('Connection with DB has been established successfully.')
  )
  .catch(err => console.error('Unable to connect to the database:', err));

//Models relationships
User.hasMany(Repair);
Repair.belongsTo(User);

db.sync()
  .then(() => console.log('Database has been synced successfully.'))
  .catch(err => console.error('Unable to sync database:', err));

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`Express Server is running on port ${PORT}`);
});
