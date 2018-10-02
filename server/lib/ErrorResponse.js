export class ErrorResponse extends Error {
	constructor(args = {}){
		super();
		this.name = 'ErrorResponse';
		if('message' in args)
			this.message = args.message;
		if('status' in args)
			this.status = args.status;
		if('headers' in args)
			this.headers = args.headers;
	}
};

export function newAuthenticationError(status, options = {}){
	let params = {
		status,
		message: options.message || '',
		headers: {
			'WWW-Authenticate': 'realm="halfpen_api"' + (options.error ? ', error="' + options.error + '"' : ''),
		},
	};

	return new ErrorResponse(params);
}

