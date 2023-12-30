import React from 'react';
import { useCarousel } from '../../lib/useCarousel.ts';
import CarouselProjectContainer from './CarouselProjectContainer.jsx'
import img1 from '../../assets/common/carousel_temp/1.jpg';
import img2 from '../../assets/common/carousel_temp/2.jpg';
import "./CarouselHero.css";

const CarouselHero = (props) => {
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

	const { ref, previous, next, setCurrent, reset } = useCarousel();
	const carouselListContents = [];

	for (let imgObj of imagesDict) {
		carouselListContents.push(
			<CarouselProjectContainer imgObj={imgObj} />
		)
	}
	console.log(carouselListContents)

	// I want to build a carousel list item component for each item in the carousel_temp folder
		// current idea: build a list of the image urls
		// send each url to a component and then create a ul of those components in this component

	return (
		<div id="carousel-hero">
			<button onClick={() => previous()}>Previous</button>
			<button onClick={() => next()}>Next</button>
			<ul className="carousel__list">{carouselListContents}</ul>
		</div>
	)
}

export default CarouselHero;