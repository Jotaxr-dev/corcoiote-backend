import request from 'supertest';
import app from '../src/app.ts';
import prisma from '../src/lib/prisma.ts';

beforeEach(async () => {
	await prisma.invoice.deleteMany();
	await prisma.customer.deleteMany();
});

afterAll(async () => {
	await prisma.$disconnect();
});

describe('GET /customers', () => {
	test('devolve 404 quando o cliente não existe', async () => {
		const res = await request(app).get('/customers/999');

		expect(res.status).toBe(404);
		expect(res.body.messsage).toBe('Cliente não encontrado.');
	});
});

describe('POST /customer', () => {
	test('cria um cliente e devolve 201 com o registro criado', async () => {
		const res = await request(app).post('/customers').send({
			name: 'Jota nl',
			email: 'jotadl@gmail.com'
		});

		expect(res.status).toBe(201);
		expect(res.body).toMatchObject({
			name: 'Jota nl',
			email: 'jotadl@gmail.com'
		});
	});
});
