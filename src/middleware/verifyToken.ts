import { Request, Response, Router } from 'express';

import { decode, loginJwt } from '../middleware/loginJwt';
import db from './../database/helpers/connection'

let verifyLogin;

export const verifyTokenLogin = (router: Router) => {

    return router.use((request: Request, response: Response, next) => {

        const token = request.headers.authorization?.split(' ')[1];
        verifyLogin = loginJwt(token);

        if (verifyLogin.login === false || verifyLogin.incorrectLogin === true) {

            return response
                .status(verifyLogin.status || 500)
                .send({ status: verifyLogin.status, statusText: verifyLogin.statusText });
        }
        let dataLogin = decode(token);

        request.app.locals = Object(dataLogin);

        next();
    });
};

export const getTokenIfExists = (request: Request, response: Response, next) => {

    const token = request.headers.authorization?.split(' ')[1];
    verifyLogin = loginJwt(token);


    let dataLogin = decode(token);

    request.app.locals = Object(dataLogin);

    next();
};

export let verifyToken = async (request: Request) => {

    const token = request.headers.authorization?.split(' ')[1];

    verifyLogin = loginJwt(token);

    if (verifyLogin.status === 401) {
        return { status: verifyLogin.status, statusText: verifyLogin.statusText };
    }


    let status: Boolean;
    if (!verifyLogin.uuidLogin) {
        return false;
    }

    return await db.login.findFirst({
        where: {
            uuidLogin: verifyLogin.uuidLogin,
            isActive: true
        }
    }).then(async (data) => {
        if (data) {
            status = true;
        } else {
            status = false
        }
        return status;
    })
}