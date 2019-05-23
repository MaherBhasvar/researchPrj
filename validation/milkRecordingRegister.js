const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateMilkRecordingRegister(data) {
    let errors = {};


    data.TotalLactationMilkYield = !isEmpty(data.TotalLactationMilkYield) ? data.TotalLactationMilkYield : '';
    data.DOD = !isEmpty(data.DOD) ? data.DOD : '';
    data.MilkingDays = !isEmpty(data.MilkingDays) ? data.MilkingDays : '';
    data.GL = !isEmpty(data.GL) ? data.GL : '';

    if (Validator.isEmpty(data.TotalLactationMilkYield)) {
        errors.TotalLactationMilkYield = "TotalLactationMilkYield field is Required";
    }
    if (Validator.isEmpty(data.DOD)) {
        errors.DOD = "DOD field is Required";
    }
    if (Validator.isEmpty(data.MilkingDays)) {
        errors.MilkingDays = "MilkingDays field is Required";
    }
    if (Validator.isEmpty(data.GL)) {
        errors.GL = "GL field is Required";
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}