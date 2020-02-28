import React from "react"
import PropTypes from 'prop-types'
import Star from "./star"

const StarRating = ({starsSelected = 0, totalStars = 5, onRate=f=>f}) => {
	return(
			<div>
				{
					[...Array(totalStars)].map((item, index) => 
						<Star key={index} 
						selected={index < starsSelected} 
						onClick={()=> onRate(index + 1)} />
						)
				}

				<p> {starsSelected} of { totalStars } </p>
			</div>
		)
	}

StarRating.propTypes = {
	totalStars: PropTypes.number
}

StarRating.defaultProps = {
	totalStars: 5
}

export default StarRating