import cors from 'cors';
import { Request, Router } from 'express';

function corsConfig(routes: Router) {

    routes.use((req, res, next) => {
        //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        //Quais são os métodos que a conexão pode realizar na API
        res.header('Access-Control-Allow-Methods', 'GET,PUT,OPTIONS,POST,DELETE');
        if (req.method == 'OPTIONS') {
            res.sendStatus(204);
        }
        next();
    });
}

export default corsConfig;
