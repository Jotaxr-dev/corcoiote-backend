import type { ValidationFieldError } from '../types.ts';

export class NotFoundError extends Error {
	statusCode = 404;

	constructor(message: string) {
		super(message);
		this.statusCode = 404;
	}
}

export class BadRequestError extends Error {
	statusCode = 400;
	fields: ValidationFieldError[];

	constructor(message: string, fields: ValidationFieldError[]) {
		super(message);
		this.fields = fields;
	}
}
