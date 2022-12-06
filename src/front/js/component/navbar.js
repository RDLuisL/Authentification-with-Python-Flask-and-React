import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import logo from '../../img/authentification_logo.png'

export const Navbar = () => {
	return (
		<nav className="nav">
			<div className="container">
				<Link to="/">
					<img src={logo} alt="Logo" width={"60px"} className="me-2" />
					<span className="h1 nav-title">Autentification with Python Flask and React</span>
				</Link>
			</div>

		</nav >
	);
};
