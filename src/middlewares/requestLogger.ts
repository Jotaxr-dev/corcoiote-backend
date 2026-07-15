import type { NextFunction, Request, Response } from 'express';

export default function requestLogger(
	request: Request,
	_response: Response,
	next: NextFunction
): void {
	console.log(`${request.method} ${request.originalUrl}`);

	next();
}
