import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const RadioFieldGroup = ({
    name,
    label,
    error,
    info,
    onChange,
    options,
}) => {
    const selectOptions = options.map(option => (
        <div key={option.label} className="col-sm" style={{ textAlign: 'left' }}>
            <input
                type="radio"
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
    return (



        <div className="form-group card-header container" style={{ textAlign: 'left' }}>
            <div
                className={classnames('row', {
                    'is-invalid': error
                })}
            >
                <div className="col-sm" style={{ textAlign: 'left' }}>
                    <label >{label}</label>
                </div>
                {selectOptions}
                {info && <small className="form-text text-muted">{info}</small>}
                {error && (
                    <div className="invalid-feedback">{error}</div>
                )}
            </div>
        </div>

    );
}

RadioFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    //value: PropTypes.string.isRequired,
    info: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
}


export default RadioFieldGroup;