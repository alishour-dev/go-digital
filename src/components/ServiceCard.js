import React from 'react'

const ServiceCard = ({ src, text, alt}) => {
    return (
        <li className="card">
            <div className="img-wrapper">
                <img src={ src } alt={ alt } className="card-img" />
            </div>
            <div className="info">
                <p>{ text }</p>
            </div>
        </li>
    )
}

export default ServiceCard
