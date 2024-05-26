import { NextFunction, Request, Response } from 'express';


import SendRequest from '../../global/interfaces/SendRequest';
import * as generalService from './service';
import { Parameters } from './interfaces';

export async function findVideos(request: Request, response: Response, next: NextFunction) {
    try {
        return await generalService.findVideos(request.body as Parameters).then((data) => {
            return response.status(200).send(data);
        });
    } catch (error: any) {
        console.log(error)
        next(error);
    }
}
