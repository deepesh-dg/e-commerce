import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';

function App() {
	return (
		<>
			<Header />
			<main className='main' id='main'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
}

export default App;
