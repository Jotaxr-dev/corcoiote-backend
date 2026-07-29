import type { NextFunction, Request, Response } from 'express';
import { BadRequestError, NotFoundError } from '../errors/index.ts';

export default function errorHandler(
	error: unknown,
	_request: Request,
	response: Response,
	_next: NextFunction
): void {
	if (error instanceof NotFoundError) {
		response.status(error.statusCode).json({ message: error.message });
		return;
	}

	if (error instanceof BadRequestError) {
		response.status(error.statusCode).json({
			message: error.message,
			fields: error.fields
		});
		return;
	}

	console.log(error);

	response.status(500).json({ message: 'Erro interno do servidor.' });
}
