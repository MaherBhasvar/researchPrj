const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};


    // data.Centre = !isEmpty(data.Centre) ? data.Centre: '';
    // data.FarmerName = !isEmpty(data.FarmerName) ? data.FarmerName: '';
    // data.MobileNo = !isEmpty(data.MobileNo) ? data.MobileNo: '';
    // data.Village = !isEmpty(data.Village) ? data.Village: '';
    data.CowTagNo = !isEmpty(data.CowTagNo) ? data.CowTagNo : '';
    data.Gender = !isEmpty(data.Gender) ? data.Gender : '';
    data.Species = !isEmpty(data.Species) ? data.Species : '';
    //data.Breed = !isEmpty(data.Breed) ? data.Breed : '';
    data.Age = !isEmpty(data.Age) ? data.Age : '';
    data.DateOfBirth = !isEmpty(data.DateOfBirth) ? data.DateOfBirth : '';
    data.RegisterationCharges = !isEmpty(data.RegisterationCharges) ? data.RegisterationCharges : '';
    data.ReceiptNumber = !isEmpty(data.ReceiptNumber) ? data.ReceiptNumber : '';
    data.ReceiptNumber = !isEmpty(data.ReceiptNumber) ? data.ReceiptNumber : '';
    data.SireID = !isEmpty(data.SireID) ? data.SireID : '';
    data.SireSireID = !isEmpty(data.SireSireID) ? data.SireSireID : '';
    data.DamID = !isEmpty(data.DamID) ? data.DamID : '';
    // data.SurveyPickYield = !isEmpty(data.SurveyPickYield) ? data.SurveyPickYield: '';
    // data.MDPH = !isEmpty(data.MDPH) ? data.MDPH: '';
    // data.LactationNo = !isEmpty(data.LactationNo) ? data.LactationNo: '';


    // if(Validator.isEmpty(data.Centre)) {
    //     errors.Centre = "Centre field is Required";
    // }
    // if(Validator.isEmpty(data.FarmerName)) {
    //     errors.FarmerName = "FarmerName field is Required";
    // }
    // if(Validator.isEmpty(data.Village)) {
    //     errors.Village = "Village field is Required";
    // }
    if (Validator.isEmpty(data.CowTagNo)) {
        errors.CowTagNo = "CowTagNo field is Required";
    }
    if (Validator.isEmpty(data.Gender)) {
        errors.Gender = "Gender field is Required";
    }
    if (Validator.isEmpty(data.Species)) {
        errors.Species = "Species field is Required";
    }
    if (data.Breed.toString().length === 0) {
        errors.Breed = "Breed field is Required";
    }
    if (Validator.isEmpty(data.Age)) {
        errors.Age = "Age field is Required";
    }
    if (Validator.isEmpty(data.DateOfBirth)) {
        errors.DateOfBirth = "DateOfBirth field is Required";
    }
    if (Validator.isEmpty(data.SireID)) {
        errors.SireID = "SireID field is Required";
    }
    if (Validator.isEmpty(data.SireSireID)) {
        errors.SireSireID = "SireSireID field is Required";
    }
    if (Validator.isEmpty(data.DamID)) {
        errors.DamID = "DamID field is Required";
    }
    // if (Validator.isEmpty(data.SurveyPickYield)) {
    //     errors.SurveyPickYield = "SurveyPickYield field is Required";
    // }
    // if (Validator.isEmpty(data.MDPH)) {
    //     errors.MDPH = "MDPH field is Required";
    // }
    // if (Validator.isEmpty(data.LactationNo)) {
    //     errors.LactationNo = "LactationNo field is Required";
    // }

    return {
        errors,
        isValid: isEmpty(errors),
    };
}