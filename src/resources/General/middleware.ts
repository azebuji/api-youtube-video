import { NextFunction, Request, Response } from "express";
import validSchema from "../../global/common/Joi/validSchema";
import validJson from "../../global/helpers/functions/validJson";
import { schemaQueryVideos } from "./schema";
import Joi from "joi";

export async function validSchemaVideos(request: Request, response: Response, next: NextFunction) {
    try {

        if (typeof request.query.dailyLimits === 'string') {
            try {
                request.query.dailyLimits = JSON.parse(request.query.dailyLimits);
            } catch (e) {
                throw "Formato inválido para dailyLimits";
            }
        }
        request.body = await validSchema(schemaQueryVideos).validateAsync(request.query, { convert: true });
        next();
    } catch (error) {
        if (error instanceof Joi.ValidationError) {
            error = error.message.replace(/\[|\]/g, '')
        }
        next(error)
    }
};