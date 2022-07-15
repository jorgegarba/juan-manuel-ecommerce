import React from 'react';
import { ToastContainer } from 'react-toastify';
import Navigation from './routes/Navigation';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<>
			<ToastContainer />
			<Navigation />
		</>
	);
};

export default App;
