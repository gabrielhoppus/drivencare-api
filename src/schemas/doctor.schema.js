import joi from "joi";

export const doctorSchema = joi.object({
    name: joi.string().min(2).required(),
    crm: joi.string().min(9).max(9).pattern(/^[0-9]+$/).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    cep: joi.string().min(8).max(8).pattern(/^[0-9]+$/).required(),
    number: joi.string().min(1).required(),
    specialty_id: joi.number().required().positive(),
    address: joi.string().min(2).required(),
    district: joi.string().min(2).required(),
    city: joi.string().min(2).required(),
    state: joi.string().min(2).max(2).required(),
    complement: joi.string()
});