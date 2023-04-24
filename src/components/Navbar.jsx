import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='navbar navbar-dark bg-warning navbar-expand-lg'>
			<div className="navbar-brand mx-4">
				Note App
			</div>
			<ul className="navbar-nav">
				<li className="nav-item">
					<NavLink className="nav-link" to='/'>Главная</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to='/about'>Информация</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
