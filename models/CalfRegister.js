const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CalfRegisterSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  AnimalRegistration: {
    type: Schema.Types.ObjectId,
    ref: 'animalRegistration',
  },
  DateOfEntry: {
    type: Date,
    default: Date.now()
  },
});

module.exports = CalfRegister = mongoose.model('calfRegister', CalfRegisterSchema);