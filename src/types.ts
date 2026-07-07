export type Customer = {
	id: number;
	name: string;
	email: string;
	status: boolean;
};

export type CreateCustomer = Omit<Customer, 'id' | 'status'>;
export type UpdateCustomer = Partial<Omit<Customer, 'id'>>;
