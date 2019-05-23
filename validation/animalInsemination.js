const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateAnimalInsemination(data) {
    let errors = {};


    data.DateOfAI = !isEmpty(data.DateOfAI) ? data.DateOfAI : '';
    data.BullNo = !isEmpty(data.BullNo) ? data.BullNo : '';
    data.NumberOfAIService = !isEmpty(data.NumberOfAIService) ? data.NumberOfAIService : '';
    data.DateOfPD = !isEmpty(data.DateOfPD) ? data.DateOfPD : '';
    data.PD = !isEmpty(data.PD) ? data.PD : '';
    data.ExpectedCalvingDate = !isEmpty(data.ExpectedCalvingDate) ? data.ExpectedCalvingDate : '';

    if (Validator.isEmpty(data.DateOfAI)) {
        errors.DateOfAI = "DateOfAI field is Required";
    }
    if (Validator.isEmpty(data.BullNo)) {
        errors.BullNo = "BullNo field is Required";
    }
    if (Validator.isEmpty(data.NumberOfAIService)) {
        errors.NumberOfAIService = "NumberOfAIService field is Required";
    }
    if (Validator.isEmpty(data.DateOfPD)) {
        errors.DateOfPD = "DateOfPD field is Required";
    }
    if (Validator.isEmpty(data.PD)) {
        errors.PD = "PD field is Required";
    }
    if (Validator.isEmpty(data.ExpectedCalvingDate)) {
        errors.ExpectedCalvingDate = "ExpectedCalvingDate field is Required";
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
}