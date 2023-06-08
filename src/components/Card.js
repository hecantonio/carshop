import React from 'react'
import { ButtonPrimary, ButtonSecondary } from './Buttons'

export const Card = ({ title, children, onRegresar = undefined, onSubmit = undefined, onFinish = undefined }) => {
    return (
        <div className="card">
            <div className="card-header fs-4 fw-bold">
                {title}
            </div>
            <div className="card-body">
                {children}
            </div>
            <div className="card-footer bg-transparent text-end">
                {
                    (onRegresar) && (
                        <ButtonSecondary
                            title="Atrás"
                            onSubmit={onRegresar}
                        />
                    )
                }
                {
                    (onSubmit) && (
                        <ButtonPrimary
                            title="Continuar"
                            onSubmit={onSubmit}
                        />
                    )
                }
                {
                    (onFinish) && (
                        <ButtonPrimary
                            title="Finalizar"
                            onSubmit={onFinish}
                        />
                    )
                }
            </div>
        </div>
    )
}
