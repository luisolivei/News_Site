import Hotlinks from './components/hotlinks/Hotlinks';
import MainContent from './components/mainContent/MainContent';
import NavbarBottom from './components/navbarBottom/NavbarBottom';
import NavbarTop from './components/navbarTop/NavbarTop';
import Home from './pages/home/Home.jsx';
import MainBody from './components/mainBody/MainBody';
import AudioVideo from './components/audioVideo/AudioVideo';
import MainBodyTwo from './components/mainBodyTwo/MainBodyTwo';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';
import './main.scss';

function App() {
	return (
		<div className='app'>
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
			</div>
		</div>
	);
}

export default App;
