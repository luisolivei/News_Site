/* eslint-disable no-unused-vars */
import Hotlinks from './components/hotlinks/Hotlinks';
import MainContent from './components/mainContent/MainContent';
import NavbarBottom from './components/navbarBottom/NavbarBottom';
import NavbarTop from './components/navbarTop/NavbarTop';
import Home from './pages/home/Home.jsx';
import MainBody from './components/mainBody/MainBody';
import AudioVideo from './components/audioVideo/AudioVideo';
import MainBodyTwo from './components/mainBodyTwo/MainBodyTwo';
import Gallery from './components/gallery/Gallery';
import BackToTop from './components/backToTop/BackToTop';
import Footer from './components/footer/Footer';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import './style/dark.css';
import './main.css';
function App() {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<div className={darkMode ? 'app dark' : 'app'}>
			<div className='homeWrapper'>
				<Home />
				<NavbarTop />
				<NavbarBottom />
				<Hotlinks />
				<MainContent />
				<MainBody />
				<AudioVideo />
				<MainBodyTwo />
				<Gallery />
				<Footer />
				<BackToTop />
			</div>
		</div>
	);
}

export default App;
