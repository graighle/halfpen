import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './views/auth/LoginForm';
import Header from './views/headers/index.js';
import 'normalize.css';

const App = () => (
	<Switch>
		<PrivateRoute path="/dashboard" component={Header} />
		<Route component={LoginForm} />
	</Switch>
);

export default App;
