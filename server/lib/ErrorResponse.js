export default class ErrorResponse extends Error {
	constructor(args = {}){
		super();
		this.name = 'ErrorResponse';
		if('message' in args)
			this.message = args.message;
		if('status' in args)
			this.status = args.status;
	}
};

