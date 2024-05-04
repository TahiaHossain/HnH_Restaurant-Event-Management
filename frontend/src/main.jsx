import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { CartContextProvider } from './context/CartContext.jsx';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthContextProvider>
			<CartContextProvider>
				<Toaster />
				<App />
			</CartContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
