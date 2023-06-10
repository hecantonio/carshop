import React from 'react'

export const PlainText = ({ columnSize = 6, label, title, value }) => {
    return (
        <div className={`col-${columnSize}`}>
            <label htmlFor={label} className="col-form-label fw-semibold">{title}</label>
            <input type="text" readOnly className="form-control-plaintext" id={label} value={value} />
        </div>
    )
}
