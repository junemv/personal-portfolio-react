import React from 'react';
import "./SoftwareContainer.css";
import img1 from '../../assets/common/carousel_temp/1.jpg';
import img2 from '../../assets/common/carousel_temp/2.jpg';
import img3 from '../../assets/common/carousel_temp/3.jpg';
import SoftwareSlide from './SoftwareSlide';
import Carousel from '../general_components/Carousel';
import TestCarousel from '../general_components/TestCarousel';

const SoftwareContainer = () => {
	const imagesList = [
		{
			id: 1,
			name: 'Project 1',
			img: img1,
			alt: "Image for Project 1",
			desc: "This is Project 1. I worked very hard on it.",
			url: "http://google.com"
		},
		{
			id: 2,
			name: 'Project 2',
			img: img2,
			alt: "Image for Project 2",
			desc: "This is Project 2. I worked very hard on it.",
			url: "http://kotaku.com"
		},
		{
			id: 3,
			name: 'Project 3',
			img: img3,
			alt: "Image for Project 3",
			desc: "This is Project 3. I worked very hard on it.",
			url: "http://junevalentino.com"
		},
	]

	const carouselComponents = [];

	for (let imgObj of imagesList) {
		carouselComponents.push(
			<SoftwareSlide imgObj={imgObj} />
		)
	}

	return (
		<div id="software-container">
			<h3>Software Carousel</h3>
			{/* <TestCarousel></TestCarousel> */}
			<Carousel slides={carouselComponents}></Carousel>
		</div>
	)
}

export default SoftwareContainer;