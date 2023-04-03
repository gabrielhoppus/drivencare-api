import bcrypt from "bcrypt";
import { patientRepository } from "../repositories/patient.repository.js";
import jwt from "jsonwebtoken";
import errors from "../errors/index.js";
import dotenv from "dotenv";

dotenv.config();

async function createPatient({ name, email, password }) {
    const { rowCount } = await patientRepository.findPatientByEmail(email);
    if (rowCount) throw errors.duplicatedEmailError(email);

    const hashPassword = await bcrypt.hash(password, 10);
    await patientRepository.createPatient({ name, email, password: hashPassword });
}

async function loginPatient({ email, password }) {
    const {
        rowCount,
        rows: [patient],
    } = await patientRepository.findPatientByEmail(email);
    if (!rowCount) throw errors.invalidCredentialsError();

    const validPassword = await bcrypt.compare(password, patient.password);
    if (!validPassword) throw errors.invalidCredentialsError();

    if (!patient.token){
        const token = jwt.sign({ patient_id: patient.id }, process.env.SECRET_KEY, { expiresIn: 86400 });
        await patientRepository.updatePatientToken(patient, token);
        return token
    }
    return patient.token;
}


export default {
    createPatient,
    loginPatient,
};