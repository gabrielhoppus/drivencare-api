import pacientService from "../services/pacient.service.js";

async function createPacient(req, res, next) {
    const { name, email, password } = req.body;
    try {
        await pacientService.createPacient({ name, email, password });
        return res.sendStatus(201);
    } catch (err) {
        next(err);
    }
};

async function loginPacient(req, res, next) {
    const { email, password } = req.body;
    try {
        const token = await pacientService.loginPacient({ email, password });
        return res.send({ token });
    } catch (err) {
        next(err);
    }
};

export default {
    createPacient,
    loginPacient,
  };