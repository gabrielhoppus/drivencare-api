import { db } from "../config/database.connection.js";

async function findPatientByEmail(email) {
    return await db.query(
        `SELECT * FROM patients WHERE email=$1`,
        [email]
    );
}

async function createPatient({ name, email, password }) {
    await db.query(
        `INSERT INTO patients (name, email, password) VALUES ($1, $2, $3)`,
        [name, email, password]
    );
}

function updatePatientToken(patient, token) {
    return db.query(`UPDATE patients SET token=$1 WHERE id=$2;`,
        [token, patient.id]);
}

export const patientRepository = {
    findPatientByEmail,
    createPatient,
    updatePatientToken
}