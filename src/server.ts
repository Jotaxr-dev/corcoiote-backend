import express from 'express';
import CustomerRouter from './routes/customer.router.ts';

const app = express();

app.use(express.json());

app.use('/customers', CustomerRouter);

app.use((_request, response) => {
	response.status(404).json({
		message: 'Not found!'
	});
});

app.listen(Number(process.env.PORT));
