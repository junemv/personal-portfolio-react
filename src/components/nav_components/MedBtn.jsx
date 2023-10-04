import React from "react";
import PropTypes from "prop-types";
import "./MedBtn.css";

const MedBtn = (props) => {
	const btnName = props.btnName;
	const handleNavClick = props.handleNavClick;
	const navRef = props.navRef;

	return (
		<button className="medbtn" onClick={() => handleNavClick(navRef)}>
			{btnName}
		</button>
	)
}

MedBtn.propTypes = {
	btnName: PropTypes.string.isRequired,
	handleNavClick: PropTypes.func.isRequired,
	navRef: PropTypes.object.isRequired
}

export default MedBtn;