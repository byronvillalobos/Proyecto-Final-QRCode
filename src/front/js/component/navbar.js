import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AvatarLoginUser from "./avatar-login-user";

export const NavbarMain = () => {
	return (
		<Navbar expand="lg">
			<NavLink className="navbar-item-logo-class" to="/">
				QR+Service
			</NavLink>
			<Navbar.Toggle className="bg-white" />
			<Navbar.Collapse>
				<Nav className="mr-auto">
					<NavLink className="navbar-item-class" to="/">
						<i className="fas fa-home"></i> Inicio
					</NavLink>
					<NavLink className="navbar-item-class" to="about-us">
						<i className="fas fa-users"></i> Quiénes somos
					</NavLink>
					<NavLink className="navbar-item-class" to="services">
						<i className="fas fa-qrcode"></i> Servicios
					</NavLink>
					<NavLink className="navbar-item-class" to="contact">
						<i className="fas fa-at"></i> Contáctanos
					</NavLink>
				</Nav>
				{/* <NavLink to="login">
					<Button variant="danger">Iniciar sesión</Button>
				</NavLink> */}
				<AvatarLoginUser />
			</Navbar.Collapse>
		</Navbar>
	);
};
