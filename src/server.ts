import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';

import ErrorHandler from './errors/errorHandlerRoute';
import jobs from './global/helpers/functions/jobs/jobs';
import routes from './routes';

if (process.env.npm_lifecycle_event == 'dev') {
  dotenv.config();
}

const app = express();
//app.use(verifyJsonMiddleware);
app.use(express.json());
jobs();

app.use(routes);

// Middleware de tratamento de erros
app.use(async (error: any, request: Request, response: Response, next: NextFunction) => {
  ErrorHandler.handleErros(error, request, response, next);
});


app.listen(process.env.API_PORT, () => {
  console.log(
    'Aplicação rodando na porta: ' +
    process.env.API_PORT +
    ' nome da aplicação: ' +
    process.env.API_NAME,
  );
});
