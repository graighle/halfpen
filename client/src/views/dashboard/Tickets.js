import React from 'react';
import { connect } from 'react-redux';
import TicketDetailDialog from '../dialogs/TicketDetailDialog.js';
import { addTicket } from '../../actions/ticket';

class Tickets extends React.Component {
	constructor(props){
		super(props);

		this.ticketDetailDialog = new TicketDetailDialog({
			addTicket: props.addTicket,
		});
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

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
	addTicket: (ticket) => dispatch(addTicket(ticket)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Tickets);

