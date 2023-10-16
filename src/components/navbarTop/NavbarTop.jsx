/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { MdLocationOn, MdOutlineLanguage, MdOutlinePersonOutline } from 'react-icons/md';
import { WiDayCloudy } from 'react-icons/wi';
import { BiCalendarAlt } from 'react-icons/bi';
import { RxCaretDown } from 'react-icons/rx';
import './navbarTop.css';

const NavbarTop = () => {
	const [dropDown, setDropDown] = React.useState(false);

	const handleDropDown = e => {
		setDropDown(!dropDown);
	};

	return (
		<div className='navbarTop'>
			<div className='navbarContainer'>
				<div className='left'>
					<div className='item'>
						<MdLocationOn style={{ fontSize: '16px' }} />
						<span>Lisbon</span>
					</div>
					<div className='item'>
						<WiDayCloudy style={{ fontSize: '16px' }} />
						<span>23°C</span>
					</div>
					<div className='item'>
						<BiCalendarAlt style={{ fontSize: '16px' }} />
						<span>Seg.(18 de setembro)</span>
					</div>
				</div>
				<div className='center'>
					<div className='item'>
						<h2>PTNews</h2>
					</div>
				</div>

				<div className='right'>
					<div className='item'>
						<MdOutlinePersonOutline style={{ fontSize: '18px' }} />
						<button className='login'>Login</button>
						<button className='regist'>Regist</button>
					</div>
					<div className='item' onClick={handleDropDown}>
						<MdOutlineLanguage style={{ fontSize: '18px' }} />
						<span>Português</span>
						<RxCaretDown style={{ fontSize: '18px' }} />
					</div>

					{dropDown && (
						<ul className='dropDownMenu'>
							<li>
								<a>Portugues</a>
							</li>
							<li>
								<a>Inglês</a>
							</li>
							<li>
								<a>Frances</a>
							</li>
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default NavbarTop;
