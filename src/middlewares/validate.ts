import type { NextFunction, Request, Response } from 'express';
import type { ZodType } from 'zod';
import { BadRequestError } from '../errors/index.ts';

export default function validate(schema: ZodType) {
	return (
		request: Request,
		_response: Response,
		next: NextFunction
	): void => {
		const result = schema.safeParse(request.body);

		if (!result.success) {
			const fields = result.error.issues.map((issue) => ({
				field: issue.path.join(' '),
				message: issue.message
			}));

			next(new BadRequestError('Dados inválidos.', fields));
		}

		next();
	};
}
