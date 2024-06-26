import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import Navbar from '../Navbar/Navbar';
import './header.scss';

function Header() {
	return (
		<header className='header'>
			<h1>
				<Link to='/Kasa'>
					<img src={Logo} alt="kasa, location d'appartements" />
				</Link>
			</h1>
			<Navbar />
		</header>
	);
}

export default Header;
