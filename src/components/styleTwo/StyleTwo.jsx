/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import HeadingTitle from '../headingTitle/HeadingTitle';
import './styleTwo.css';
const StyleTwo = ({
	category,
	title,
	Icon,
	headingImg,
	headingExcept,
	headingAuthor,
	headingDate,
	image1,
	image1Except,
	image1Author,
	image1Date,
	image2,
	image2Except,
	image2Author,
	image2Date,
	image3,
	image3Except,
	image3Author,
	image3Date,
	image4,
	image4Except,
	image4Author,
	image4Date,
}) => (
	<div className='styleTwo'>
		<HeadingTitle title={category} />
		<div className='top'>
			<img src={headingImg} alt='' />
			<a className='cat'>{title}</a>
			<a className='icon'>{Icon}</a>
			<div className='postInfo'>
				<ul className='nav'>
					<li>{headingAuthor}</li>
					<li>{headingDate}</li>
				</ul>
				<h3>{headingExcept}</h3>
			</div>
		</div>
		<div className='bottom'>
			<div className='item'>
				<div className='left'>
					<img src={image1} alt='' />
				</div>
				<div className='right'>
					<ul className='nav'>
						<li>{image1Author}</li>
						<li>{image1Date}</li>
					</ul>
					<h3>{image1Except}</h3>
				</div>
			</div>
			<div className='item'>
				<div className='left'>
					<img src={image2} alt='' />
				</div>
				<div className='right'>
					<ul className='nav'>
						<li>{image2Author}</li>
						<li>{image2Date}</li>
					</ul>
					<h3>{image2Except}</h3>
				</div>
			</div>
			<div className='item'>
				<div className='left'>
					<img src={image3} alt='' />
				</div>
				<div className='right'>
					<ul className='nav'>
						<li>{image3Author}</li>
						<li>{image3Date}</li>
					</ul>
					<h3>{image3Except}</h3>
				</div>
			</div>
			<div className='item'>
				<div className='left'>
					<img src={image4} alt='' />
				</div>
				<div className='right'>
					<ul className='nav'>
						<li>{image4Author}</li>
						<li>{image4Date}</li>
					</ul>
					<h3>{image4Except}</h3>
				</div>
			</div>
		</div>
	</div>
);

export default StyleTwo;
