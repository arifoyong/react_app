import React, { Component } from 'react';

// Stateless functional component
const NavBar = (props) => {
	return (
			<nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand" href="#">
					Navbar
					<span className="badge badge-pill badge-secondary">
						{props.totalCounters}
					</span>
				</a>
			</nav>

		);
};



export default NavBar;