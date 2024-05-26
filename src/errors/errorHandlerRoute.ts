import { PrismaClientUnknownRequestError } from "@prisma/client/runtime";
import { NextFunction, Request, Response } from "express";

import { errorHandler } from "./errorHandler";


class ErrorHandler {

    static async handleErros(error: any, request: Request, response: Response, next: NextFunction) {
        //console.info(error)

        let formatedErro = await errorHandler(error)
        if (formatedErro.status === 401) {
            return response.status(formatedErro.status).send(formatedErro);
        }
        if (formatedErro.status) {
            return response.status(formatedErro.status || 500).send(formatedErro);
        }
        if (formatedErro) {
            return response.status(400).send({ status: 400, statusText: formatedErro });
        }

        next();
    }
}
export default ErrorHandler