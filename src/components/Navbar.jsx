import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='navbar navbar-dark bg-warning navbar-expand-lg'>
			<div className='container'>
				<div className="navbar-brand">
					Note App
				</div>
				<ul className="navbar-nav">
					<li className="nav-item">
						<NavLink className="nav-link" to='/'>Главная</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
