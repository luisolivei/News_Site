/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import './navbarBottom.scss';
const NavbarBottom = () => {
	const [fix, setFix] = React.useState(false);
	const [dropdownone, setDropdownone] = React.useState(false);
	const handleDropDownone = e => {
		setDropdownone(!dropdownone);
	};
	const handleScroll = e => {
		if (window.scrollY > 50) {
			setFix(true);
		} else {
			setFix(false);
		}
	};

	

	window.addEventListener('scroll', handleScroll);

	return (
		<div className={fix ? 'navbarBottom fixed' : 'navbarBottom'}>
			<div className='navbarBottomWrapper'>
				<div className='item'>
					<span>Home</span>
				</div>
				<div className='item' onClick={handleDropDownone}>
					<span>Desporto</span>
					<MdKeyboardArrowDown style={{ fontSize: '20px' }} />
					{dropdownone && (
						<div className='dropDownMenu1'>
							<span className='active'>
								<a> Recentes</a>
							</span>
							<span>
								<a> Classificação</a>
							</span>
						</div>
					)}
				</div>
				<div className='item'>
					<span>Tecnologia</span>
					<MdKeyboardArrowDown style={{ fontSize: '20px' }} />
				</div>
				<div className='item'>
					<span>Contatos</span>
				</div>
				<div className='item'>
					<span>About</span>
				</div>

				<div className='item'>
					<input placeholder='Pesquisar' />
					<FaSearch style={{ fontSize: '18px' }} />
				</div>
			</div>
		</div>
	);
};

export default NavbarBottom;
