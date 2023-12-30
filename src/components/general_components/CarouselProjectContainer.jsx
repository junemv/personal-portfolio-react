import React from 'react';
import "./CarouselProjectContainer.css";

const CarouselProjectContainer = (props) => {
	const imgObj = props.imgObj;

	return (
		<div id="carousel-project-container">
			<li className="carousel__item">
				<img src={imgObj.path} alt={imgObj.alt}></img>
				<div>{imgObj.desc}</div>
				<a href={imgObj.url}><button>{imgObj.name} on Github</button></a>
			</li>
		</div>
	)
}

export default CarouselProjectContainer;