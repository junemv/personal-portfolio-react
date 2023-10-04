import React from "react";
import PropTypes from "prop-types";
import "./MobileNav.css";

const MobileNav = (props) => {
	const handleNavClick = props.handleNavClick;
	const handleTopScrollClick = props.handleTopScrollClick;
	const softwareRef = props.softwareRef;
	const illustrationRef = props.illustrationRef;
	const contactRef = props.contactRef;

	return (
		<ul id="mobile-navbar">
			<li className="mobile-nav-btn" onClick={()=>handleTopScrollClick()}>
				home
			</li>
			<li className="mobile-nav-btn" onClick={()=>handleNavClick(softwareRef)}>
				software
			</li>
			<li className="mobile-nav-btn" onClick={()=>handleNavClick(illustrationRef)}>
				illustration
			</li>
			<li className="mobile-nav-btn" id="mobile-nav-btn-contact" onClick={()=>handleNavClick(contactRef)}>
				contact
				</li>
		</ul>
	)
}

MobileNav.propTypes = {
	handleNavClick: PropTypes.func.isRequired,
	handleTopScrollClick: PropTypes.func.isRequired,
	softwareRef: PropTypes.object.isRequired,
	illustrationRef: PropTypes.object.isRequired,
	contactRef: PropTypes.object.isRequired
}

export default MobileNav;