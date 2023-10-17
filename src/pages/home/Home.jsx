import React from 'react';
import MainContent from '../../components/mainContent/MainContent';
import MainBody from '../../components/mainBody/MainBody';
import AudioVideo from '../../components/audioVideo/AudioVideo';
import MainBodyTwo from '../../components/mainBodyTwo/MainBodyTwo';
import Gallery from '../../components/gallery/Gallery';
import BackToTop from '../../components/backToTop/BackToTop';
import Hotlinks from '../../components/hotlinks/Hotlinks';
import './home.css';

const Home = () => {
	return (
		<div className='home'>
			<Hotlinks />
			<MainContent />
			<MainBody />
			<AudioVideo />
			<MainBodyTwo />
			<Gallery />
			<BackToTop />
		</div>
	);
};

export default Home;
