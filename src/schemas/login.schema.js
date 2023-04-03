import joi from 'joi';

export const loginSchema = joi.object({
    email: joi.string().email({ tlds: { allow: false } }),
    password: joi.string().required(),
})