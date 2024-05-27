import Joi from "joi";

export const schemaQueryVideos = Joi.object({
    dailyLimits: Joi.array().items(Joi.number().required()).min(7).max(7).required(),
    search: Joi.string().required(),
    type: Joi.string().valid('google-api', 'pattern').required()
});