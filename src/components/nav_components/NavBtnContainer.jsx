import React from "react";
import "./NavBtnContainer.css";
import MedBtn from "./MedBtn";

const NavBtnContainer = () => {

	return (
		// <div>
			<ul id="navbtncontainer">
				<li>
					<MedBtn btnName="Software" />
				</li>
				<li>
					<MedBtn btnName="Illustration" />
				</li>
				<li>
					<MedBtn btnName="Contact" />
				</li>
			</ul>
		// </div>
	)
}

export default NavBtnContainer;