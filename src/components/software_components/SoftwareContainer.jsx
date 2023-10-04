import React from 'react';
import "./SoftwareContainer.css";
import Carousel from '../general_components/Carousel';
import SoftwareDescription from './SoftwareDescription';

const SoftwareContainer = () => {

	return (
		<div id="software-container">
			<div>
				<SoftwareDescription></SoftwareDescription>
			</div>
			<div>
				<Carousel></Carousel>
			</div>
		</div>
	)
}

export default SoftwareContainer;