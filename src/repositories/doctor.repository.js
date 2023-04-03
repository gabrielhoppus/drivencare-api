import { db } from "../config/database.connection.js";

async function finddDoctorByCRMOrEmail(crm, email) {
    return await db.query(
        `SELECT * FROM doctors WHERE crm =$1 OR email=$2`,
        [crm, email]
    );
}

async function checkAddress(cep){
    return db.query(`SELECT * FROM addresses WHERE cep=$1;`, [cep])
}

async function createDoctorAddress({
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
    password,
    specialty_id
}) {
    await db.query(
        `WITH ins AS (
            INSERT INTO addresses
                (cep, address, district, city, state, number, complement)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id)
            INSERT INTO doctors
                (name, crm, email, password, address_id, specialty_id)
            VALUES ($8, $9, $10, $11, (SELECT id FROM ins), $12)`,
        [cep, address, district, city, state, number, complement, name, crm, email, password, specialty_id]
    );
}

async function createDoctor({
    name, crm, email, password, address_id, specialty_id }) {
    await db.query(
        `INSERT INTO doctors 
            (name, crm, email, password, address_id, specialty_id) 
            VALUES ($1, $2, $3, $4, $5, $6)`,
        [name, crm, email, password, address_id, specialty_id]
    );
}

async function findDoctorByEmail(email) {
    return await db.query(
        `SELECT * FROM doctors WHERE email=$1`,
        [email]
    );
}

async function updateDoctorToken(doctor, token) {
    return db.query(`UPDATE doctors SET token=$1 WHERE id=$2;`,
        [token, doctor.id]);
}


export const doctorRepository = {
    finddDoctorByCRMOrEmail,
    createDoctorAddress,
    createDoctor,
    findDoctorByEmail,
    updateDoctorToken,
    checkAddress
}