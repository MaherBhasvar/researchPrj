const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnimalRegistrationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  DateOfEntry: {
    type: Date,
    default: Date.now()
  },
  // Centre: {
  //   type: String,
  //   required: true,
  // },
  // FarmerName: {
  //   type: String,
  //   required: true,
  // },
  // MobileNo: {
  //   type: Number,
  // },
  // Village: {
  //   type: String,
  //   required: true
  // },
  CowTagNo: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    required: true
  },
  Species: {
    type: String,
    required: true
  },
  Breed: {
    type: [String],
    required: true
  },
  Age: {
    type: Number,
    required: true
  },
  DateOfBirth: {
    type: Date,
  },
  BloodLevel: {
    type: String,
    required: true
  },
  RegistrationCharges: {
    type: String,
    required: true
  },
  ReceiptNumber: {
    type: String,
    required: true
  },
  SireID: {
    type: String,
    required: true
  },
  SireSireID: {
    type: String,
    required: true
  },
  DamID: {
    type: String,
    required: true
  },
  // SurveyPickYield: {
  //   type: Number,
  //   required: true
  // },
  // MDPH: {
  //   type: String,
  //   required: true
  // },
  // LactationNo: {
  //   type: String,
  //   required: true
  // },
});

module.exports = AnimalRegistration = mongoose.model('animalRegistration', AnimalRegistrationSchema);