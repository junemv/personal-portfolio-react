import React from 'react';
import "./CarouselProjectContainer.css";

const CarouselProjectContainer = (props) => {
	const imgObj = props.imgObj;

	return (
			<li className="carousel__item">
				<img src={imgObj.path} alt={imgObj.alt}></img>
				<div>{imgObj.desc}</div>
				<a href={imgObj.url}><button>{imgObj.name} on Github</button></a>
			</li>
	)
}

export default CarouselProjectContainer;