import React from 'react'

const Headline = ({title, icon, info}) => {
    return (
        <div className="headline">
            <div className="title">
                { icon }
                <h2>{title}</h2>
            </div>
            <h3>{ info }</h3>
        </div>
    )
}

export default Headline
