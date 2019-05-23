const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCalvingRegister(data) {
    let errors = {};


    data.DateOfCalving = !isEmpty(data.DateOfCalving) ? data.DateOfCalving : '';
    data.EaseOfCalving = !isEmpty(data.EaseOfCalving) ? data.EaseOfCalving : '';
    data.TypeOfCalving = !isEmpty(data.TypeOfCalving) ? data.TypeOfCalving : '';
    data.CalfSex = !isEmpty(data.CalfSex) ? data.CalfSex : '';
    data.CongDefect = !isEmpty(data.CongDefect) ? data.CongDefect : '';
    data.CalfTagNo = !isEmpty(data.CalfTagNo) ? data.CalfTagNo : '';

    if (Validator.isEmpty(data.DateOfCalving)) {
        errors.DateOfCalving = "DateOfCalving field is Required";
    }
    if (Validator.isEmpty(data.EaseOfCalving)) {
        errors.EaseOfCalving = "EaseOfCalving field is Required";
    }
    if (Validator.isEmpty(data.TypeOfCalving)) {
        errors.TypeOfCalving = "TypeOfCalving field is Required";
    }
    if (Validator.isEmpty(data.CalfSex)) {
        errors.CalfSex = "CalfSex field is Required";
    }
    if (Validator.isEmpty(data.CongDefect)) {
        errors.CongDefect = "CongDefect field is Required";
    }
    if (Validator.isEmpty(data.CalfTagNo)) {
        errors.CalfTagNo = "CalfTagNo field is Required";
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
}