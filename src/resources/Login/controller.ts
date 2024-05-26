import { NextFunction, Request, Response } from 'express';


import SendRequest from '../../global/interfaces/SendRequest';
import * as loginService from './service';
export async function makeLogin(request: Request, response: Response, next: NextFunction) {
    try {
        return await loginService.makeLogin(request.body).then((data) => {
            return response.status(200).json(data);
        });
    } catch (error: any) {
        next(error);
    }
}
