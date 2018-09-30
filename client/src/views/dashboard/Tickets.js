import React from 'react';
import TicketDetailDialog from '../dialogs/TicketDetailDialog.js';

class Tickets extends React.Component {
	constructor(props){
		super(props);

		this.ticketDetailDialog = new TicketDetailDialog();
	}

	render(){
		return (
			<div className="l-panel m-panel t-ticket-background">
				<div className="l-both-ends m-title-bar">
					<div className="m-panel-title">
						チケット
					</div>
					<div
						onClick={e => {
							this.ticketDetailDialog.open();
						}}
					>
						[+]
					</div>
				</div>
			</div>
		)
	}
};

export default Tickets;

