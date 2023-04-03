import patientService from "../services/patient.service.js";

async function createPatient(req, res, next) {
    const { name, email, password } = req.body;
    try {
        await patientService.createPatient({ name, email, password });
        return res.sendStatus(201);
    } catch (err) {
        next(err);
    }
};

async function loginPatient(req, res, next) {
    const { email, password } = req.body;
    try {
        const token = await patientService.loginPatient({ email, password });
        return res.send({ token });
    } catch (err) {
        next(err);
    }
};

export default {
    createPatient,
    loginPatient,
};