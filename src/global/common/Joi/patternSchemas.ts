import Joi from "joi";

export const uuid = Joi.string().uuid();