import bcrypt from "bcrypt";
import { pacientRepository } from "../repositories/pacient.repository.js";
import jwt from "jsonwebtoken";
import errors from "../errors/index.js";
import dotenv from "dotenv";

dotenv.config();

async function createPacient({ name, email, password }) {
    const { rowCount } = await pacientRepository.findPacientByEmail(email);
    if (rowCount) throw errors.duplicatedEmailError(email);

    const hashPassword = await bcrypt.hash(password, 10);
    await pacientRepository.createPacient({ name, email, password: hashPassword });
}

async function loginPacient({ email, password }) {
    const {
        rowCount,
        rows: [user],
    } = await pacientRepository.findPacientByEmail(email);
    if (!rowCount) throw errors.invalidCredentialsError();

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw errors.invalidCredentialsError();

    const token = jwt.sign({ pacient_id: user.id }, process.env.SECRET_KEY, { expiresIn: 86400 });

    return token;

}


export default {
    createPacient,
    loginPacient,
};