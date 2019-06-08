import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TextFieldGroup from './TextFieldGroup';



const CheckboxFieldGroup = ({
    name,
    label,
    error,
    info,
    onChange,
    options,
    optionBreed,
    addCustomBreed,
}) => {
    const selectOptions = options.map(option => (
        <div key={option.label} className="col-sm" style={{ textAlign: 'left' }}>
            <input
                type="checkbox"
                name={name}
                value={option.value}
                onChange={onChange}
                className={classnames('', {
                    'is-invalid': error
                })}
                checked={option.checked}
            /> {option.label}
        </div>
    ))
    console.log("Error in Breed", error)
    console.log(error && (
        <div className="invalid-feedback">{error}</div>
    ))
    return (
        <div className="form-group card-header container" style={{ textAlign: 'left' }}>
            <div className="row">
                <div className="col-6" style={{ textAlign: 'left' }}>
                    <label >{label}
                        {/* <span style={{ color: 'red' }}>*</span> */}
                    </label>
                </div>
                <div className="col-6" style={{ textAlign: 'left' }}>
                    <button onClick={addCustomBreed} disabled={optionBreed}>Add Breed</button>
                    {selectOptions}
                </div>
                {info && <small className="form-text text-muted">{info}</small>}



            </div>
            {error && (
                <div className="alert alert-danger" role="alert">{error}</div>
            )}
        </div>

    );
}

CheckboxFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    //value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}


export default CheckboxFieldGroup;