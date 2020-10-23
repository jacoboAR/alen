const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExtraSchema = Schema({
  userId: { type: String, unique: true },
  name: { type: String, trim: true },
  lastname: { type: String, trim: true },
  age: { type: Number, trim: true },
  birthday: { type: String, trim: true },
  genre: { type: String, trim: true },
  postalCode: { type: Number, trim: true },
  city: { type: String, trim: true },
  address: { type: String, trim: true },
  insuranceNumber: { type: String, trim: true, unique: true, required: true },
  vatNumber: { type: String, trim: true, unique: true, required: true },
  nationality: { type: String, trim: true },
  phone: { type: Number, trim: true },
  height: { type: Number, trim: true },
  weight: { type: Number, trim: true },
  hairColor: { type: String, trim: true },
  eyesColor: { type: String, trim: true },
  shirtSize: { type: String, trim: true },
  trouserSize: { type: Number, trim: true },
  footSize: { type: Number, trim: true },
  waiterExperience: { type: Boolean },
  extraExperience: { type: Boolean },
  singingExperience: { type: Boolean },
  dancingExperience: { type: Boolean },
  seaExperience: { type: Boolean },
  occupation: { type: String, trim: true },
  availability: { type: String, trim: true },
  driverLicense: { type: String, trim: true },
  abilities: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('Extra', ExtraSchema, 'extras');
