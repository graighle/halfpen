import React from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import LoginForm from './views/auth/LoginForm';
import Dashboard from './views/dashboard';
import 'normalize.css';
import './styles/base.css';
import './styles/layouts';
import './styles/modules';
import './styles/states';
import './styles/themes/default';

const App = () => (
	<Switch>
		<PrivateRoute path="/dashboard" component={Dashboard} />
		<Route component={LoginForm} />
	</Switch>
);

export default App;

