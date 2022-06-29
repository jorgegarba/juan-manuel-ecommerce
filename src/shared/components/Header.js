import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const Header = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<div className="container-fluid">
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink className={'nav-link'} to={'/'}>
							Home
						</NavLink>
						<NavLink className={'nav-link'} to={'/products'}>
							Products
						</NavLink>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default Header;
