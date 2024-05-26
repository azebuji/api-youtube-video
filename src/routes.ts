import express, { NextFunction, Request, Response } from 'express';

import corsConfig from './global/utils/corsConfig';



import Login from './resources/Login/routes';
import General from './resources/General/routes';

const routes = express.Router();

//Rota para validarmos se a api está atualizada.
//routes.use(morgan('combined'));

routes.get('/api-status', (request, response) =>
  response.json({
    status: 'ok',
  }),
);

corsConfig(routes);


routes.use('/login', Login);
routes.use('/general', General)

//Rotas não existentes
routes.use('*', (request: Request, response: Response, next: NextFunction) => {
  return response.status(404).send({ mensagem: 'Rota não encontrada', status: 404 });
});

export default routes;