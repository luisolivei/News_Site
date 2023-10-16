/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import HeadingTitle from '../headingTitle/HeadingTitle';
import axios from 'axios';
import './mainBodyTwo.css';
import { FaRegEnvelopeOpen } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';

const Table = () => {
	//const { dados, setDados } = useState([]);
	const [teamMembers, setTeamMembers] = useState([]);
	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://free-football-soccer-videos.p.rapidapi.com/',
			headers: {
				'X-RapidAPI-Key': '7664b346b9msh5577f00288434a5p19119djsn68eb77306869',
				'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com',
			},
		};
		const fetchApiData = async () => {
			try {
				const response = await axios.request(options);
				setTeamMembers(response.data.slice(0, 5));
			} catch (error) {
				console.error(error);
			}
		};
		fetchApiData();
	}, []);

	console.log(teamMembers); //so mostra depois do use effect correr todo

	return (
		<div className='mainBodyTwo'>
			<div className='left_side'>
				<HeadingTitle title='Calendário' />
				{teamMembers.map(member => (
					<div key={member.id} className='wg_loader'>
						<div className='calendario'>
							<div className='left'>
								<div className='logo'>
									<span>
										<img src={member.thumbnail} alt='' />
									</span>
								</div>
								<h3>{member.side1.name}</h3>
							</div>
							<div className='center'>
								<h3>{member.competition.name}</h3>
								<span>vs</span>
								<h3>{member.date}</h3>
							</div>
							<div className='right'>
								<div className='logo'>
									<span>
										<img src={member.thumbnail} alt='' />
									</span>
								</div>
								<h3>{member.side2.name}</h3>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className='right_side'>
				<div className='newsLetter'>
					<div className='top'>
						<h2>Newsletters</h2>
						<FaRegEnvelopeOpen className='icon' />
					</div>
					<div className='bottom'>
						<div className='bottomWrapper'>
							<div className='content'>
								<p>Subscreva o seu email e receba todas as novidades.</p>
							</div>
							<form>
								<div className='formInput'>
									<input type='email' name='email' placeholder='E-mail' autoComplete='off' required className='formControl' />
									<button type='submit' className='button'>
										<RiSendPlaneFill style={{ fontSize: '25px' }} />
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className='widget3'>
					<HeadingTitle title='Votar' />
					<div className='pollWidget'>
						<div className='title'>
							<h3>Melhor Equipa de momento?</h3>
						</div>
						<div className='options'>
							<form>
								<div className='checkBox'>
									<label>
										<input type='checkbox' />
										<span>Benfica</span>
									</label>
									<p>
										<span style={{ width: '32%' }}></span>
									</p>
									<div className='perc'>32%</div>
								</div>
								<div className='checkBox'>
									<label>
										<input type='checkbox' />
										<span>Porto</span>
									</label>
									<p>
										<span style={{ width: '18%' }}></span>
									</p>
									<div className='perc'>18%</div>
								</div>
								<div className='checkBox'>
									<label>
										<input type='checkbox' />
										<span>Sporting</span>
									</label>
									<p>
										<span style={{ width: '50%' }}></span>
									</p>
									<div className='perc'>50%</div>
								</div>
								<button type='submit'>Votar</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Table;
