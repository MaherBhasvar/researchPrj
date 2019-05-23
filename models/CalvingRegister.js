const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CalvingRegisterSchema = new Schema({
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
  DateOfCalving: {
    type: Date,
    default: Date.now()
  },
  EaseOfCalving: {
    type: String,
    required: true,
  },
  TypeOfCalving: {
    type: String,
    required: true,
  },
  CalfSex: {
    type: String,
    required: true
  },
  CongDefect: {
    type: String,
    required: true
  },
  CalfTagNo: {
    type: String,
    required: true
  },
  Remarks: {
    type: String,
    //required: true      
  },
});

module.exports = CalvingRegister = mongoose.model('calvingRegister', CalvingRegisterSchema);