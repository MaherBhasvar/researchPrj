const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CurrentPositionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        default: null,
    },
    DateOfEntry: {
        type: Date,
        default: Date.now,
    },
    AnimalRegistration: {
        type: Schema.Types.ObjectId,
        ref: 'animalRegistration',
        default: null,
    },
    AnimalInsemination: {
        type: Schema.Types.ObjectId,
        ref: 'animalInsemination',
        default: null,
    },
    CalvingRegister: {
        type: Schema.Types.ObjectId,
        ref: 'calvingRegister',
        default: null,
    },
    MilkRecordingRegister: {
        type: Schema.Types.ObjectId,
        ref: 'milkRecordingRegister',
        default: null,
    },
    CalfRegister: {
        type: Schema.Types.ObjectId,
        ref: 'calfRegister',
        default: null,
    },
});

module.exports = CurrentPosition = mongoose.model('currentPosition', CurrentPositionSchema);
