import React from 'react';
import { useCarousel } from '../../lib/useCarousel.ts';
import "./CarouselHero.css";

const CarouselHero = (props) => {
	const imgSrc = props.imgSrc;

	const { ref, previous, next, setCurrent, reset } = useCarousel();
	const carouselListContents = [];

	return (
		<div id="carousel-hero">
			<button onClick={() => previous()}>Previous</button>
			<button onClick={() => next()}>Next</button>
			<ul>{carouselListContents}</ul>
		</div>
	)
}

export default CarouselHero;