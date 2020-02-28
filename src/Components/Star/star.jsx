import React from "react"
import PropTypes from 'prop-types'
import './star.css'

const Star = ({selected=false, onClick=f=>f}) => {
		return(
			<div className={(selected)? "star selected": "star"} onClick={onClick}></div>
		)
}

Star.propTypes = {
	selected: PropTypes.bool,
	onClick: PropTypes.func
}

export default Star