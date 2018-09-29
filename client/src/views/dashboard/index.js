import React from 'react';
import Header from './../header/index';
import Tickets from './Tickets.js';

const Dashboard = () => (
	<div className="halfpen">
		<Header />
		<div className="l-root-body t-root-body">
			<div className="l-dashboard">
				<Tickets />
			</div>
		</div>
	</div>
);

export default Dashboard;

