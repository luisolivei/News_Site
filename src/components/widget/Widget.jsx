/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaFacebookF, FaShareAlt, FaTwitter } from 'react-icons/fa';
import { ImGooglePlus } from 'react-icons/im';
import { GiRss } from 'react-icons/gi';
import { BsVimeo } from 'react-icons/bs';
import { TfiYoutube } from 'react-icons/tfi';
import './widget.css';

const Widget = () => {
	return (
		<div className='widget'>
			<div className='top'>
				<a>
					<img src='assets/ad-300x250-1.jpg' alt='' />
				</a>
			</div>
			<div className='center'>
				<h2>Stay Connected</h2>
				<FaShareAlt />
			</div>
			<div className='bottom'>
				<ul className='nav'>
					<li className='facebook'>
						<a>
							<span className='icon'>
								<FaFacebookF className='facebookicon' style={{ fontSize: '25px' }} />
							</span>
							<span className='count'>580</span>
							<span className='title'>Gostos</span>
						</a>
					</li>
					<li className='twitter'>
						<a>
							<span className='icon'>
								<FaTwitter className='twittericon' style={{ fontSize: '25px' }} />
							</span>
							<span className='count'>624</span>
							<span className='title'>Subscritores</span>
						</a>
					</li>
					<li className='googlePlus'>
						<a>
							<span className='icon'>
								<ImGooglePlus className='googleicon' style={{ fontSize: '25px' }} />
							</span>
							<span className='count'>580</span>
							<span className='title'>Gostos</span>
						</a>
					</li>
					<li className='rss'>
						<a>
							<span className='icon'>
								<GiRss className='rssicon' style={{ fontSize: '25px' }} />
							</span>
							<span className='count'>700</span>
							<span className='title'>Gostos</span>
						</a>
					</li>
					<li className='vimeo'>
						<a>
							<span className='icon'>
								<BsVimeo className='vimeoicon' style={{ fontSize: '25px' }} />
							</span>
							<span className='count'>700</span>
							<span className='title'>Subscritores</span>
						</a>
					</li>
					<li className='youtube'>
						<a>
							<span className='icon'>
								<TfiYoutube className='youtubeicon' style={{ fontSize: '25px' }} />
							</span>
							<span className='count'>700</span>
							<span className='title'>Gostos</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Widget;
