/* eslint-disable no-unused-vars */
import NavbarBottom from './components/navbarBottom/NavbarBottom';
import NavbarTop from './components/navbarTop/NavbarTop';
import Home from './pages/home/Home.jsx';
import Footer from './components/footer/Footer';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/dark.css';
import './main.css';
function App() {
	const { darkMode } = useContext(DarkModeContext);

	return (
		<Router>
			<div className={darkMode ? 'app dark' : 'app'}>
				<div className='homeWrapper'>
					<NavbarTop />
					<NavbarBottom />

					<Routes>
						<Route exact path='/' element={<Home />}></Route>
						<Route exact path='/register' element={<Register />}></Route>
						<Route exact path='/login' element={<Login />}></Route>
					</Routes>
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default App;
