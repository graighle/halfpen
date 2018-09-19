import React from 'react';
import { connect } from 'react-redux';
import {
	Route,
	Redirect
} from 'react-router-dom';

const PrivateRoute = ({ auth, component: Component, ...rest }) => (
	<Route
		{...rest}
		render = { props => 
			auth.token !== '' ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/',
						state: { from: props.location }
					}}
				/>
			)
		}
	/>
);

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(
	mapStateToProps
)(PrivateRoute);

