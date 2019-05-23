const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const AnimalInseminationSchema = new Schema({
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
  DateOfAI: {
    type: Date,
    default: Date.now()
  },
  BullNo: {
    type: String,
    required: true,
  },
  NumberOfAIService: {
    type: String,
    required: true,
  },
  DateOfPD: {
    type: Date,
    default: Date.now()
  },
  PD: {
    type: String,
    required: true
  },
  ExpectedCalvingDate: {
    type: Date,
    default: Date.now()
  },
});

module.exports = AnimalInsemination = mongoose.model('animalInsemination', AnimalInseminationSchema);