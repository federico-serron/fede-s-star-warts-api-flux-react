import React from 'react'

export const Spinner = () => {
    return (
        <div className='spinner-container'>
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
