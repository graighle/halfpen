import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './views/auth/LoginForm';
import Header from './views/headers/index.js';
import './App.css';

const App = () => (
	<div>
		<Route exact path="/" component={LoginForm} />
		<PrivateRoute path="/dashboard" component={Header} />
	</div>
);

export default App;
