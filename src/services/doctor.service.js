import bcrypt from "bcrypt";
import { doctorRepository } from "../repositories/doctor.repository.js";
import jwt from "jsonwebtoken";
import errors from "../errors/index.js";
import dotenv from "dotenv";

dotenv.config();

async function createDoctor({ name, crm, email, password, cep, address, district, city, state, number, complement, specialty_id }) {
    const { rowCount } = await doctorRepository.finddDoctorByCRMOrEmail(crm, email);
    if (rowCount) throw errors.duplicatedError(email);
    const hashPassword = await bcrypt.hash(password, 10);
    const address_chk = await doctorRepository.checkAddress({ cep })
    if (!address_chk.rowCount) {
        await doctorRepository.createDoctorAddress({
            cep,
            address,
            district,
            city,
            state,
            number,
            complement,
            name,
            crm,
            email,
            password: hashPassword,
            specialty_id
        });
    } else {
        const address_id = address_chk.rows[0].id;

        await doctorRepository.createDoctor({
            name,
            crm,
            email,
            password: hashPassword,
            address_id,
            specialty_id
        });
    }
};

async function loginDoctor({ email, password }) {
    const {
        rowCount,
        rows: [doctor],
    } = await doctorRepository.findDoctorByEmail(email);
    if (!rowCount) throw errors.invalidCredentialsError();

    const validPassword = await bcrypt.compare(password, doctor.password);
    if (!validPassword) throw errors.invalidCredentialsError();

    if (!doctor.token) {
        const token = jwt.sign({ patient_id: doctor.id }, process.env.SECRET_KEY, { expiresIn: 86400 });
        await doctorRepository.updateDoctorToken(doctor, token);
        return token
    }
    return doctor.token;
};

export default {
    createDoctor,
    loginDoctor
};