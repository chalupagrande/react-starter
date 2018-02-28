const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/test'
//set Promise library for mongoose
mongoose.Promise = global.Promise

mongoose.connect(uri, {}).catch(err => console.log('ERROR CONNECTION TO DATABASE', err));

const db = mongoose.connection;
exports.db = db;