import React from "react";
import MedBtn from "./MedBtn";
import PropTypes from "prop-types";
import "./NavBtnContainer.css";


const NavBtnContainer = (props) => {
	const handleNavClick = props.handleNavClick;
	const softwareRef = props.softwareRef;
	const illustrationRef = props.illustrationRef;
	const contactRef = props.contactRef;

	return (
		// <div>
			<ul id="navbtncontainer">
				<li>
					<MedBtn btnName="Software" handleNavClick={handleNavClick} navRef={softwareRef} />
				</li>
				<li>
					<MedBtn btnName="Illustration" handleNavClick={handleNavClick} navRef={illustrationRef} />
				</li>
				<li>
					<MedBtn btnName="Contact" handleNavClick={handleNavClick} navRef={contactRef} />
				</li>
			</ul>
		// </div>
	)
}

NavBtnContainer.propTypes = {
	softwareRef: PropTypes.object.isRequired,
	illustrationRef: PropTypes.object.isRequired,
	contactRef: PropTypes.object.isRequired,
	handleNavClick: PropTypes.func.isRequired
}

export default NavBtnContainer;