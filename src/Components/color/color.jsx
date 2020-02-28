import React from 'react'
import StarRating from '../Star/starRating'
import './color.css'

const Color = ({title, color, rating=0, onRemove=f=>f, onRate=f=>f}) => {
	return(
		<div className="color-container">
			<button id="close" onClick={onRemove}>X</button>
			<div className="color-name">
				{title}
			</div>
			<div className="color" style={{backgroundColor: color}}></div>
			<div className="star-rating">
				<StarRating starsSelected={rating} onRate={onRate} />
			</div>

		</div>
	)
}

export default Color;