import React from 'react';
import "./SoftwareSlide.css";

const SoftwareSlide = (props) => {
	const imgObj = props.imgObj;

	return (
			<li className="carousel__item">
				<img src={imgObj.path} alt={imgObj.alt}></img>
				<div>{imgObj.desc}</div>
				<a href={imgObj.url}><button>{imgObj.name} on Github</button></a>
			</li>
	)
}

export default SoftwareSlide;