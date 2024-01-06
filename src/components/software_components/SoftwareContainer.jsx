import React from 'react';
import "./SoftwareContainer.css";
import img1 from '../../assets/common/carousel_temp/1.jpg';
import img2 from '../../assets/common/carousel_temp/2.jpg';
import SoftwareSlide from './SoftwareSlide';

const SoftwareContainer = () => {
	const imagesDict = [
		{
			id: 1,
			name: 'Project 1',
			path: img1,
			alt: "Image for Project 1",
			desc: "This is Project 1. I worked very hard on it.",
			url: "http://google.com"
		},
		{
			id: 2,
			name: 'Project 2',
			path: img2,
			alt: "Image for Project 2",
			desc: "This is Project 2. I worked very hard on it.",
			url: "http://kotaku.com"
		},
	]

	const carouselListContents = [];

	for (let imgObj of imagesDict) {
		carouselListContents.push(
			<SoftwareSlide imgObj={imgObj} />
		)
	}

	return (
		<div id="software-container">
			<Carousel></Carousel>
		</div>
	)
}

export default SoftwareContainer;