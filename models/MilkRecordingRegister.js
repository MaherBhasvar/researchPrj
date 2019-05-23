const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MilkRecordingRegisterSchema = new Schema({
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
  TotalLactationMilkYield: {
    type: Number,
    required: true
  },
  DOD: {
    type: String,
    required: true
  },
  MilkingDays: {
    type: Number,
    required: true,
  },
  GL: {
    type: String,
    required: true,
  },

});

module.exports = MilkRecordingRegister = mongoose.model('milkRecordingRegister', MilkRecordingRegisterSchema);