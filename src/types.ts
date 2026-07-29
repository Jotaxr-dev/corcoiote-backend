export type Customer = {
	id: number;
	name: string;
	email: string;
	status: boolean;
};

export type ValidationFieldError = {
	field: string;
	message: string;
};
