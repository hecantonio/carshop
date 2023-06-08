import React from 'react'

export const ButtonPrimary = ({ title, onSubmit }) => {
    return (
        <button
            className="btn btn-primary"
            onClick={onSubmit}
        >
            {title}
        </button>
    )
}

export const ButtonSecondary = ({ title, onSubmit }) => {
    return (
        <button
            className="btn btn-secondary me-2"
            onClick={onSubmit}
        >
            {title}
        </button>
    )
}
