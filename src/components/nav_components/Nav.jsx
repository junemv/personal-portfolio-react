import React from "react";
import PropTypes from "prop-types";
import "./Nav.css";

const NavBar = (props) => {
	const handleNavClick = props.handleNavClick;
	const handleTopScrollClick = props.handleTopScrollClick;
	const softwareRef = props.softwareRef;
	const illustrationRef = props.illustrationRef;
	const contactRef = props.contactRef;

	return (
		<nav id="navbar">
			<ul className="nav-btn">
				<li onClick={()=>handleTopScrollClick()}>
					home
				</li>
				<li onClick={()=>handleNavClick(softwareRef)}>
					software
				</li>
				<li onClick={()=>handleNavClick(illustrationRef)}>
					illustration
				</li>
				<li onClick={()=>handleNavClick(contactRef)}>
					contact
				</li>
			</ul>
		</nav>
	)
}

NavBar.propTypes = {
	handleNavClick: PropTypes.func.isRequired,
	handleTopScrollClick: PropTypes.func.isRequired,
	softwareRef: PropTypes.object.isRequired,
	illustrationRef: PropTypes.object.isRequired,
	contactRef: PropTypes.object.isRequired
}

export default NavBar;