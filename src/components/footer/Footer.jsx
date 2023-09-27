/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import './footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footerWrapper'>
				<div className='left'>
					<p>
						&copy; 2023 <a>PTNews</a>. All rights reserved
					</p>
				</div>
				<div className='right'>
					<ul className='nav1'>
						<li>
							<a> FAQ</a>
						</li>
						<li>
							<a>Suporte</a>
						</li>
					</ul>
					<ul className='nav2'>
						<li>
							<a>
								<FaFacebookF style={{ fontSize: '18px' }} />
							</a>
						</li>
						<li>
							<a>
								<FaTwitter style={{ fontSize: '18px' }} />
							</a>
						</li>
						<li>
							<a>
								<FaGooglePlusG style={{ fontSize: '18px' }} />
							</a>
						</li>
						<li>
							<a>
								<FaLinkedinIn style={{ fontSize: '18px' }} />
							</a>
						</li>
						<li>
							<a>
								<FaYoutube style={{ fontSize: '18px' }} />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
