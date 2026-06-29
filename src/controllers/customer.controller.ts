import type { Request, Response } from 'express';
import * as CustomerService from '../services/customer.service.ts';
import type { CreateCustomer } from '../types.ts';

export function getAllCustomers(_request: Request, response: Response): void {
	const customers = CustomerService.findAllCustomers();

	response.status(200).json(customers);
}

export function getCustomerById(request: Request, response: Response): void {
	const id = Number(request.params.id);

	const customer = CustomerService.findCustomerById(id);

	response.status(200).json(customer);
}

export function createCustomer(request: Request, response: Response): void {
	const { name, email } = request.body as CreateCustomer;

	const customer = CustomerService.insertCustomer({
		name,
		email
	});

	response.status(201).json(customer);
}

export function updateCustomer(request: Request, response: Response): void {
	const id = Number(request.params.id);
	const { name, email, status } = request.body as {
		name: string;
		email: string;
		status: boolean;
	};

	const customer = CustomerService.modifyCustomer(id, {
		name,
		email,
		status
	});

	response.status(200).json(customer);
}

export function deleteCustomer(request: Request, response: Response): void {
	const id = Number(request.params.id);

	CustomerService.removeCustomer(id);

	response.status(204).send();
}
