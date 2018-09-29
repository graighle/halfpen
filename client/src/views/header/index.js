import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Header = ({ logout }) => (
	<div className="l-root-header t-root-header">
		<div className="l-title m-halfpen-title t-halfpen-title">Halfpen</div>
		<div className="l-menus"></div>
		<div className="l-options">
			<button className="m-base-button t-base-button"
				onClick={e => {
					e.preventDefault();
					logout();
				}}
			>
				ログアウト
			</button>
		</div>
	</div>
);

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);

