import React from 'react';
import CarouselHero from '../general_components/CarouselHero';
import "./IllustrationContainer.css";
import IllustrationPreview from './IllustrationPreview';

const IllustrationContainer = () => {

	return (
		<div id="illustration-container">
			<div>
				<IllustrationPreview></IllustrationPreview>
				{/* <CarouselHero imgSrc={"/Users/junemv/Development/personal-portfolio-react/assets/common/carousel_temp"}></CarouselHero> */}
			</div>
		</div>
	)
}

export default IllustrationContainer;