import { pinoHttp } from 'pino-http';
import app from './app.ts';
import logger from './lib/logger.ts';

app.use(pinoHttp({ logger }));
app.listen(Number(process.env.PORT));
