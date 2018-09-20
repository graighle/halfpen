import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

import { withRouter } from 'react-router';

const LoginForm = ({ auth, dispatch, history }) => {
	let id;
	let password;

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault();
					if(!id.value.trim() || !password.value.trim())
						return;
					dispatch(login(id.value, password.value));
					//history.push('/dashboard');
				}}
			>
				<input ref={node => id = node} />
				<input ref={node => password = node} />
				<button type="submit">
					Login
				</button>
			</form>
		</div>
	);
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default withRouter(connect(
	mapStateToProps
)(LoginForm));

