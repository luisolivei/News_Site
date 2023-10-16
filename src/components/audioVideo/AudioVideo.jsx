import React from 'react';
import HeadingTitle from '../headingTitle/HeadingTitle';
import './audioVideo.css';

const AudioVideo = () => {
	return (
		<div className='audioVideo'>
			<div className='audioVideoWrapper'>
				<HeadingTitle title='Audio & Videos' />

				<div className='body'>
					<div className='videoWrapper'>
						<video width='100%' controls autoPlay loop>
							<source src='/assets/newUpdate.mp4' type='video/mp4' />
						</video>
					</div>
					<div className='listWrapper'>
						<div className='list'>
							<div className='item'>
								<div className='left'>
									<img src='assets/audio-video-02.jpg' alt='' />
								</div>
								<div className='right'>
									<ul className='nav'>
										<li>Dreo</li>
										<li>20 Set. 2023</li>
									</ul>
									<h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fuga.</h3>
								</div>
							</div>
							<div className='item'>
								<div className='left'>
									<img src='assets/audio-video-03.jpg' alt='' />
								</div>
								<div className='right'>
									<ul className='nav'>
										<li>Lens</li>
										<li>18 Ago. 2023</li>
									</ul>
									<h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fuga.</h3>
								</div>
							</div>
							<div className='item'>
								<div className='left'>
									<img src='assets/audio-video-04.jpg' alt='' />
								</div>
								<div className='right'>
									<ul className='nav'>
										<li>Francesco</li>
										<li>23 Set. 2023</li>
									</ul>
									<h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fuga.</h3>
								</div>
							</div>
							<div className='item'>
								<div className='left'>
									<img src='assets/audio-video-05.jpg' alt='' />
								</div>
								<div className='right'>
									<ul className='nav'>
										<li>zukami</li>
										<li>26 Set. 2023</li>
									</ul>
									<h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Fuga.</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AudioVideo;
