import React from "react";
import "./Nav.css";

const NavBar = (props) => {
	const toggleVisible = props.toggleNavIsVisible;

	window.addEventListener('scroll', () => {
		console.log("you scrollin'")
	})

	// window.onscroll = function() {showNavbar()};

	// let navbar = document.getElementById("navbar");
	// let sticky = navbar.offsetTop;

	// console.log(navbar)

	// const showNavbar = () => {
	// 	if (window.scrollY >= sticky ) {
	// 		toggleVisible()
	// 		console.log("VISIBLE")
	// 		setSticky()
	// 	// } else {
	// 	// 	toggleVisible();
	// 	}
	// }

	// const setSticky = () => {
	// 	if (window.scrollY >= sticky ) {
	// 		navbar.classList.add("sticky")
	// 	} else {
	// 		navbar.classList.remove("sticky");
	// 	}
	// }

	return (
		<div id="navbar">
			NavBar
		</div>
	)
}

export default NavBar;