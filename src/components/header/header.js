import React from 'react';
import './header.css';

const Header = () => {

	return (
		<header>
			<div className="header-title">
				Star Wars vs Game of Thrones
			</div>
			<button className="header-button">
				Restart
			</button>
		</header>
	);
};

export default Header;
