import './App.css';
import './output.css';
import './output.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './routes/Navbar';
import Home from './routes/Home';
import Pricing from './routes/Pricing';
import Company from './routes/Company';
import FAQ from './routes/FAQ';
import Contact from './routes/Contact';
import Promote from './routes/Promote';
import Login from './routes/Login.js';
import Signup from './routes/Signup.js';
import { useCookies } from 'react-cookie';

function App() {
	const [cookie] = useCookies(['token']);

	return (
		<div className='w-screen h-screen font-poppins '>
			<BrowserRouter>
				{cookie.token && cookie.token !== undefined ? (
					<Routes>
						<Route
							path='/home'
							element=<Pricing />
						/>
						<Route
							path='/company'
							element=<Company />
						/>
						<Route
							path='/faq'
							element=<FAQ />
						/>
						<Route
							path='/help'
							element=<Contact />
						/>
						<Route
							path='/promote'
							element=<Promote />
						/>
						<Route
							path='*'
							element=<Home />
						/>
					</Routes>
				) : (
					<Routes>
						<Route
							path='/home'
							element=<Pricing />
						/>
						<Route
							path='/login'
							element=<Login />
						/>
						<Route
							path='/signup'
							element=<Signup />
						/>
						<Route
							path='/company'
							element=<Company />
						/>
						<Route
							path='/faq'
							element=<FAQ />
						/>
						<Route
							path='/help'
							element=<Contact />
						/>
						<Route
							path='*'
							element=<Home />
						/>
					</Routes>
				)}
			</BrowserRouter>
		</div>
	);
}

export default App;
