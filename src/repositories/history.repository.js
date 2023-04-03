import { db } from "../config/database.connection.js";

async function doctorHistory(doctor_id){
    return await db.query(
        `SELECT 
            a.day,
            a.hour,
            d.name AS doctor,
            s.specialty,
            p.name AS patient,
            st.description AS status
        FROM appointments a
        JOIN doctors d ON a.doctor_id =  d.id
        JOIN specialties s ON d.specialty_id = s.id
        JOIN status st ON st.id = d.specialty_id
        JOIN patients p ON p.id = a.patient_id
        WHERE a.doctor_id = $1 AND st.id = 4`,
        [doctor_id]
    )
}

async function patientHistory(patient_id){
    return await db.query(
        `SELECT 
            a.day,
            a.hour,
            d.name AS doctor,
            s.specialty,
            p.name AS patient,
            st.description AS status
        FROM appointments a
        JOIN doctors d ON a.doctor_id =  d.id
        JOIN specialties s ON d.specialty_id = s.id
        JOIN status st ON st.id = d.specialty_id
        JOIN patients p ON p.id = a.patient_id
        WHERE a.patient_id = $1 AND st.id = 4`,
        [patient_id]
    )
}

export const historyRepository ={
    doctorHistory,
    patientHistory
}