/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import HeadingTitle from '../headingTitle/HeadingTitle';
import { MdVisibility } from 'react-icons/md';
import BoxOption from '../boxOption/BoxOption';
import { Photo } from '../../category';
import { FaQuoteLeft } from 'react-icons/fa';
import './gallery.scss';

const Gallery = () => {
	return (
		<div className='gallery'>
			<div className='galleryWrapper'>
				<div className='galleryImg'>
					<HeadingTitle title={'Galeria de Fotos'} />
					<div className='top'>
						<img src='assets/photo-gallery-01.jpg' alt='' />
						<a className='cat'>Natureza</a>
						<a className='icon'>
							<MdVisibility style={{ fontSize: '20px' }} />
						</a>

						<div className='postInfo'>
							<div className='postInfo'>
								<ul className='nav'>
									<li>Andre Gomés</li>
									<li>20 Agosto 2023</li>
								</ul>
								<h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore nihil esse voluptatem voluptates hic facilis laudantium labore distinctio vitae soluta.</h3>
							</div>
						</div>
					</div>

					<BoxOption {...Photo} />
				</div>
				<div className='galleryReader'>
					<HeadingTitle title={'Opinião dos leitores'} />

					<div className='readerListWrapper'>
						<div className='readerListItem'>
							<div className='readerImg'>
								<img src='assets/readers-opinion-01.png' alt='' />
							</div>
							<div className='postInfo'>
								<div className='title'>
									<h3>
										<FaQuoteLeft className='icon' />
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									</h3>
								</div>
								<ul>
									<li>de Ana Gomes</li>
									<li>18 Abr 2023</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='readerListWrapper'>
						<div className='readerListItem'>
							<div className='readerImg'>
								<img src='assets/readers-opinion-02.png' alt='' />
							</div>
							<div className='postInfo'>
								<div className='title'>
									<h3>
										<FaQuoteLeft className='icon' />
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									</h3>
								</div>
								<ul>
									<li>de João Santos</li>
									<li>18 Abr 2023</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='readerListWrapper'>
						<div className='readerListItem'>
							<div className='readerImg'>
								<img src='assets/readers-opinion-03.png' alt='' />
							</div>
							<div className='postInfo'>
								<div className='title'>
									<h3>
										<FaQuoteLeft className='icon' />
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									</h3>
								</div>
								<ul>
									<li>de Andreia Sousa</li>
									<li>18 Abr 2023</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
