import React from 'react';
import "./Topbar.css";
import SocialMediaBar from '../general_components/SocialMediaBar';

const TopBar = (props) => {
	let isMobile = props.isMobile

	return (
		<div className="topbar">
			<div id="logo">
				logo
			</div>
			{isMobile === false && (
				<SocialMediaBar></SocialMediaBar>
			)}
		</div>
	)
}

export default TopBar;