import React from 'react';
import { connect } from 'react-redux';
import {
	getTickets,
	addTicket
} from '../../actions/ticket';
import TicketDetailDialog from '../dialogs/TicketDetailDialog.js';
import TicketCard from '../tickets/TicketCard';

class Tickets extends React.Component {
	constructor(props){
		super(props);

		this.ticketDetailDialog = new TicketDetailDialog({
			addTicket: props.addTicket,
		});
	}

	componentDidMount(){
		const { getTickets } = this.props;

		getTickets({});
	}

	render(){
		const { tickets } = this.props;

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
				<ul>
					{tickets.allIds.map(ticket => <TicketCard key={ticket} ticket={ticket} />)}
				</ul>
			</div>
		)
	}
};

const mapStateToProps = state => ({
	tickets: state.tickets,
});

const mapDispatchToProps = dispatch => ({
	getTickets: filters => dispatch(getTickets(filters)),
	addTicket: (ticket) => dispatch(addTicket(ticket)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Tickets);

