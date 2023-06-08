import React from 'react';

export const Input = ({ title, name, value, onInputChange, disabled = false }) => {
    return (
        <div className="mb-3 row">
            <label htmlFor={name} className="col-sm-2 col-form-label fw-semibold">{title}</label>
            <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    id={name}
                    name={name}
                    value={value}
                    onChange={onInputChange}
                    disabled={disabled}
                />
            </div>
        </div>
    )
}
