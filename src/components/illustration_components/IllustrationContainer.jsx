import React from 'react';
import "./IllustrationContainer.css";
import IllustrationPreview from './IllustrationPreview';
import Carousel from '../general_components/Carousel';

const IllustrationContainer = () => {

	return (
		<div id="illustration-container">
			<div>
				<IllustrationPreview></IllustrationPreview>
			</div>
			<div>
				<Carousel></Carousel>
			</div>
		</div>
	)
}

export default IllustrationContainer;