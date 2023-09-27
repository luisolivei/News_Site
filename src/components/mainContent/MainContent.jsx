/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { MdFlashOn } from 'react-icons/md';
import './mainContent.scss';

const MainContent = () => {
	return (
		<div className='mainContent'>
			<div className='col'>
				<div className='row'>
					<img src='assets/benficanews.jpg' alt='benfica' />
					<a className='cat'>Desporto</a>
					<a className='icon'>
						<MdFlashOn style={{ fontSize: '20px' }} />
					</a>

					<div className='postInfo'>
						<ul className='nav'>
							<li>Benfica</li>
							<li>08 Setembro 2023</li>
						</ul>
						<h3>Svava Gudmundsdóttir reforça o Benfica</h3>
					</div>
				</div>
			</div>
			<div className='col'>
				<div className='row'>
					<div className='col'>
						<div className='row'>
							<img src='assets/tecnology-02.jpg' alt='Barcelona' />
							<a className='cat'>Tecnologia</a>
							<a className='icon'>
								<MdFlashOn style={{ fontSize: '20px' }} />
							</a>
							<div className='postInfo'>
								<ul className='nav'>
									<li>Tecnologia</li>
									<li>08 Setembro 2023</li>
								</ul>
								<h3>Cientistas adaptam a Realidade Virtual para utilização em consultas remotas</h3>
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<div className='row'>
							<img src='assets/felix2.jpeg' alt='Barcelona' />
							<a className='cat'>Desporto</a>
							<a className='icon'>
								<MdFlashOn style={{ fontSize: '20px' }} />
							</a>

							<div className='postInfo'>
								<ul className='nav'>
									<li>internacional</li>
									<li>08 Setembro 2023</li>
								</ul>
								<h3>«Em Montjuic houve festa com João Félix no papel de DJ»: imprensa espanhola continua rendida</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
