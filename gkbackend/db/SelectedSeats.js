// // models/SelectedSeats.js

// const { DataTypes } = require('sequelize');
// const { sequelize } = require('./dbConnectionsModel'); // Adjust the path as per your project structure

// const SelectedSeats = sequelize.define('SelectedSeats', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   busId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   from: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   to: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   selectedSeats: {
//     type: DataTypes.ARRAY(DataTypes.TEXT), // Assuming selectedSeats is stored as an array of strings
//     allowNull: false,
//   },
//   bookingDate: {
//     type: DataTypes.DATEONLY, // Store date only, without time
//     allowNull: false,
//     defaultValue: DataTypes.NOW,
//   },
//   gender: {
//     type: DataTypes.ENUM('Male', 'Female', 'Other'),
//     allowNull: false,
//   },
// }, {
//   sequelize,
//   modelName: 'SelectedSeats',
//   tableName: 'seatselected', // Define the table name as 'seatselected'
//   timestamps: true, // Include timestamps (createdAt, updatedAt)
// });

// SelectedSeats.sync()
//   .then(() => console.log('seatselected table synced'))
//   .catch(err => console.error('Failed to sync seatselected table:', err));

// module.exports = {SelectedSeats};

// models/SelectedSeats.js

// const { DataTypes } = require('sequelize');
// const { sequelize } = require('./dbConnectionsModel'); 

// const SelectedSeats = sequelize.define('SelectedSeats', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   busId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   from: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   to: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   selectedSeats: {
//     type: DataTypes.ARRAY(DataTypes.TEXT), 
//     allowNull: false,
//   },
//   bookingDate: {
//     type: DataTypes.DATEONLY, 
//     allowNull: false,
//     defaultValue: DataTypes.NOW,
//   },
//   gender: {
//     type: DataTypes.ARRAY(DataTypes.ENUM('Male', 'Female', 'Other')), 
//     allowNull: false,
//     defaultValue: 'Male', // Default value for gender
//   },
//   status: {
//     type: DataTypes.ENUM('active', 'pending'),
//     allowNull: false,
//     defaultValue: 'pending',
//   }

// }, {
//   sequelize,
//   modelName: 'SelectedSeats',
//   tableName: 'seatselected', 
//   timestamps: true, 
// });

// SelectedSeats.sync()
//   .then(() => console.log('seatselected table synced'))
//   .catch(err => console.error('Failed to sync seatselected table:', err));

// module.exports = { SelectedSeats };


const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnectionsModel');

const SelectedSeats = sequelize.define('SelectedSeats', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  busId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  from: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  to: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  selectedSeats: {
    type: DataTypes.ARRAY(DataTypes.TEXT), 
    allowNull: false,
    
  },
  bookingDate: {
    type: DataTypes.DATEONLY, 
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  gender: {
    type: DataTypes.ARRAY(DataTypes.ENUM('Male', 'Female', 'Other')), 
    allowNull: false,
    defaultValue: [], // Default value for gender
  },
  status: {
    type: DataTypes.ENUM('active', 'pending'),
    allowNull: false,
    defaultValue: 'pending',
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: true,
  }

}, {
  sequelize,
  modelName: 'SelectedSeats',
  tableName: 'seatselected', 
  timestamps: true, 
});

SelectedSeats.sync()
  .then(() => console.log('seatselected table synced'))
  .catch(err => console.error('Failed to sync seatselected table:', err));

module.exports = { SelectedSeats };
