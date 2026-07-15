import express from 'express';
import errorHandler from './middlewares/errorHandler.ts';
import requestLogger from './middlewares/requestLogger.ts';
import CustomerRouter from './routes/customer.router.ts';

const app = express();

app.use(requestLogger);
app.use(express.json());

app.use('/customers', CustomerRouter);

app.use((_request, response) => {
	response.status(404).json({
		message: 'Not found!'
	});
});

app.use(errorHandler);

app.listen(Number(process.env.PORT));
