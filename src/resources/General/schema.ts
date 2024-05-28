import Joi from "joi";

export const schemaQueryVideos = Joi.object({
    dailyLimits: Joi.array().items(Joi.number().required()).min(7).max(7).required(),
    type: Joi.string().valid('google-api', 'pattern').required(),
    search: Joi.when('type', {
        is: 'google-api',
        then: Joi.string().required(),
        otherwise: Joi.allow(null)
    })
});