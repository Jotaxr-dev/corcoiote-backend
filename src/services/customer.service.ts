import { customers } from '../mocks/customer.mock.ts';
import type { CreateCustomer, Customer, UpdateCustomer } from '../types.ts';

export function findAllCustomers(): Customer[] {
	return customers;
}

export function findCustomerById(id: number): Customer {
	const customer = customers.find((customer) => customer.id === id);

	if (!customer) {
		throw new Error(`Cliente com id ${id} não encontrado.`);
	}

	return customer;
}

export function insertCustomer({ name, email }: CreateCustomer): Customer {
	const id = customers[customers.length - 1].id;

	const customer: Customer = {
		id: id + 1,
		name,
		email,
		status: true
	};

	customers.push(customer);

	return customer;
}

export function modifyCustomer(
	id: number,
	{ name, email, status }: UpdateCustomer
): Customer {
	const customer = customers.find((customer) => customer.id === id);

	if (!customer) {
		throw new Error(`Cliente com id ${id} não encontrado.`);
	}

	if (name) customer.name = name;
	if (email) customer.email = email;
	if (status !== undefined) customer.status = status;

	return customer;
}

export function removeCustomer(id: number): void {
	const index = customers.findIndex((customer) => customer.id === id);

	if (index === -1) {
		throw new Error(`Cliente com id ${id} não encontrado.`);
	}

	customers.splice(index, 1);
}
