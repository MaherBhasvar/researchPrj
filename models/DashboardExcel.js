const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const DashboardExcelSchema = new Schema({
    SrNo: {
        type: String,
        required: false,
    },
    DateOfEntry: {
        type: String,
        required: false,
    },
    Centre: {
        type: String,
        required: false,
    },
    FarmerName: {
        type: String,
        required: false,
    },
    MoNo: {
        type: String,
        required: false,
    },

    Village: {
        type: String,
        required: false,
    },
    CowTagNo: {
        type: String,
        required: false,
    },
    Age: {
        type: String,
        required: false,
    },
    DateOfBirth: {
        type: String,
        required: false,
    },

    Sire: {
        type: String,
        required: false,
    },
    Dam: {
        type: String,
        required: false,
    },
    SurveyPickYield: {
        type: String,
        required: false,
    },
    MDPH: {
        type: String,
        required: false,
    },
    LactationNo: {
        type: String,
        required: false,
    },
    DateOfAI: {
        type: String,
        required: false,
    },
    BullNo: {
        type: String,
        required: false,
    },
    NumberOfAI: {
        type: String,
        required: false,
    },

    DateOfPD: {
        type: String,
        required: false,
    },
    PD: {
        type: String,
        required: false,
    },
    ExpCalvDate: {
        type: String,
        required: false,
    },
    DateOfCalving: {
        type: String,
        required: false,
    },

    EaseOfCalving: {
        type: String,
        required: false,
    },
    TypeOfCalving: {
        type: String,
        required: false,
    },
    CalfSex: {
        type: String,
        required: false,
    },

    CongDefect: {
        type: String,
        required: false,
    },
    CalfTagNo: {
        type: String,
        required: false,
    },
    Remarks: {
        type: String,
        required: false,
    },
    MRActDate: {
        type: String,
        required: false,
    },

});

module.exports = DashboardExcel = mongoose.model('dashboardSchema', DashboardExcelSchema);