import { db } from "../config/database.connection.js";

async function findPacientByEmail(email) {
    return await db.query(
        `SELECT * FROM pacients WHERE email=$1`,
        [email]
    );
}

async function createPacient({ name, email, password }) {
    await db.query(
        `INSERT INTO pacients (name, email, password) VALUES ($1, $2, $3)`,
        [name, email, password]
    );
}

function updatePacientToken(user, token) {
    return db.query(`UPDATE pacients SET token=$1 WHERE id=$2;`,
        [token, user.id]);
}

export const pacientRepository = {
    findPacientByEmail,
    createPacient,
    updatePacientToken
}