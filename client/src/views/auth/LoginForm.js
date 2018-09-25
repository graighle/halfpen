import React from 'react';
import { connect } from 'react-redux';
import {
	withRouter,
	Redirect
} from 'react-router';
import {
	login,
	restoreToken
} from '../../actions/auth';

class LoginForm extends React.Component {
	constructor(props){
		super(props);

		this.id = null;
		this.password = null;
	}

	componentDidMount(){
		const { auth, restoreToken } = this.props;

		if(auth.doRestoreToken)
			restoreToken();
	}

	render(){
		const { auth, login } = this.props;

		if(auth.isLoggedin)
			return <Redirect to="/dashboard" />;

		return (
			<div>
				<form
					onSubmit={e => {
						e.preventDefault();
						if(!this.id.value.trim() || !this.password.value.trim())
							return;
						login(this.id.value, this.password.value);
					}}
				>
					<input ref={node => this.id = node} />
					<input ref={node => this.password = node} />
					<button type="submit">
						Login
					</button>
				</form>
				<div>{auth.isAuthenticating ? 'Authenticating...' : ''}</div>
				<div>{auth.isLoginFailed ? 'Login Failed' : ''}</div>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
	login: (id, pw) => dispatch(login(id, pw)),
	restoreToken: () => dispatch(restoreToken()),
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginForm));

