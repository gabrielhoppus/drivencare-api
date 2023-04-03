import { db } from "../config/database.connection.js";

async function findPatientByEmail(email) {
    return await db.query(
        `SELECT * FROM patients WHERE email=$1`,
        [email]
    );
}

async function findById(id) {
    return await db.query(
        `    
      SELECT * FROM patients WHERE id=$1
    `,
        [id]
    );
}

async function createPatient({ name, email, password }) {
    return await db.query(
        `INSERT INTO patients (name, email, password) VALUES ($1, $2, $3)`,
        [name, email, password]
    );
}

async function updatePatientToken(patient, token) {
    return await db.query(`UPDATE patients SET token=$1 WHERE id=$2;`,
        [token, patient.id]);
}

export const patientRepository = {
    findPatientByEmail,
    createPatient,
    updatePatientToken,
    findById
}