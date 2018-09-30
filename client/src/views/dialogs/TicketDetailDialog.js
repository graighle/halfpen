const vex = require('vex-js');
vex.registerPlugin(require('vex-dialog'));
vex.defaultOptions.className = 'vex-theme-default';
vex.defaultOptions.contentClassName = 'l-dialog-content t-ticket-background';

class TicketDetailDialog {
	constructor(){
		this.dialog = null;
	}

	open(params = {}){
		const ticket = params.ticket || {};
		const isAdding = typeof ticket.ticketNo === 'undefined' || ticket.ticketNo === '';

		this.dialog = vex.dialog.open({
			input: [
				'<div>',
					'<textarea name="title" class="l-width-100 l-height-middle" placeholder="チケットの内容"></textarea>',
				'</div>'
			].join(''),
			buttons: [
				{
					type: 'submit',
					text: (isAdding ? 'ADD' : 'SAVE'),
					className: 'vex-dialog-button-primary',
					click: () => {
					},
				},
				{
					type: 'button',
					text: 'CANCEL',
					className: 'vex-dialog-button-secondary',
					click: () => {
						this.dialog.close();
					},
				},
			],
		});
	}

};

export default TicketDetailDialog;

