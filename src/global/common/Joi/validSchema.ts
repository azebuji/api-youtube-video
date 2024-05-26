import Joi from 'joi';

import msgErros from "./errosMsg";

function validSchema<T>(schema: Joi.ObjectSchema<T>) {
    return schema.messages(msgErros);
}

export function validParamsSchema<T>(schema: Joi.StringSchema<T>) {
    return schema.messages(msgErros);
}

export default validSchema;
