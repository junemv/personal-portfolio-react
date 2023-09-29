import React from "react";
import "./MedBtn.css";

const MedBtn = (props) => {
	const btnName = props.btnName;

	return (
		<div className="medbtn">
			{btnName}
		</div>
	)
}

export default MedBtn;