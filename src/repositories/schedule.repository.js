import { db } from "../config/database.connection.js";

async function checkOpenSchedule(day, hour, doctor_id){
    return await db.query(
        `SELECT * FROM appointments WHERE day=$1 AND hour=$2 AND doctor_id=$3`,
        [day, hour, doctor_id]
    )
}

async function makeAppointment(day, hour, doctor_id, patient_id){
    return await db.query(
        `INSERT INTO appointments
            (day, hour, doctor_id, patient_id, status)
        VALUES ($1, $2, $3, $4, 1)`,
        [day, hour, doctor_id, patient_id]
    )
}

async function listAppointments(patient_id){
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
        WHERE a.patient_id = $1`, [patient_id]
    )
}

async function confirmAppointment(doctor_id, appointment_id){
    return await db.query(
        `UPDATE appointments
        SET status_id = 2
        WHERE doctor_id = $1 
        AND id = $2`, [doctor_id, appointment_id]
    )
}

async function cancelAppointment(doctor_id, appointment_id){
    return await db.query(
        `UPDATE appointments
        SET status_id = 3
        WHERE doctor_id = $1 
        AND id = $2`, [doctor_id, appointment_id]
    )
}

export const scheduleRepository ={
    checkOpenSchedule,
    makeAppointment,
    listAppointments,
    confirmAppointment,
    cancelAppointment
}