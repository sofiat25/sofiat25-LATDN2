import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
		<div className="container-fluid">
		  <a className="navbar-brand" href="#"></a>
		  <Link className="navbar-brand " to="/">
          <img className="img-fluid" src={logo} height={20} width={60} />
        </Link>
		  <div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav">
			<li><Link className="dropdown-item" to="/zapatos">Zapatos</Link></li>
			<li><Link className="dropdown-item" to="/vestidos">Vestidos</Link></li>
			<li><Link className="dropdown-item" to="/accesorios">Accesorios</Link></li> 
			</ul>
		  </div>
		</div>
	  </nav>
	);
};

