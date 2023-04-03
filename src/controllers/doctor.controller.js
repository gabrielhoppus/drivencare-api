import doctorService from "../services/doctor.service.js";

async function createDoctor(req, res, next) {
    const { name, crm, email, password, cep, address, district, city, state, number, complement, specialty_id } = req.body;
    try {
        await doctorService.createDoctor({name, crm, email, password, cep, address, district, city, state, number, complement, specialty_id });
        return res.sendStatus(201);
    } catch (err) {
        next(err);
    }
};

async function loginDoctor(req, res, next) {
    const { email, password } = req.body;
    try {
        const token = await doctorService.loginDoctor({ email, password });
        return res.send({ token });
    } catch (err) {
        next(err);
    }
};

export default {
    createDoctor,
    loginDoctor,
};