import React from 'react'

const Rating = ({value, text, color}) => {
    return (
        <div className="rating">
            <span>
                <i style={{color}} className={
                    value >= 1 
                    ? 'fas fa-star'
                    : value >= 0.5
                        ? 'fas fa-star-ha;f-alt'
                        : 'far fa-star'
                }>

                </i>
            </span>
            
        </div>
    )
}

export default Rating
