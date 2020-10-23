const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = Schema({
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
  isAdmin: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('User', UserSchema, 'users');
