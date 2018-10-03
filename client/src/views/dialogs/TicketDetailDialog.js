const serialize = require('form-serialize');
const vex = require('vex-js');
vex.registerPlugin(require('vex-dialog'));
vex.defaultOptions.className = 'vex-theme-default';
vex.defaultOptions.contentClassName = 'l-dialog-content t-ticket-background';

class TicketDetailDialog {
	constructor(opts){
		this.dialog = null;
		this.options = opts;
	}

	open(ticket = {}){
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
						this.dialog.value = true;
						this.save(serialize(this.dialog.form, {hash: true, disabled: true, empty: true}));
					},
				},
				{
					type: 'button',
					text: 'CANCEL',
					className: 'vex-dialog-button-secondary',
					click: () => {
						this.dialog.value = false;
						this.dialog.close();
					},
				},
			],
			beforeClose: () => {
				return !this.dialog.value;
			},
		});
	}

	save(data){
		this.options.addTicket({
			title: data.title,
		});
	}

};

export default TicketDetailDialog;

