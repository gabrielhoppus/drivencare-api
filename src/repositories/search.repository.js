import { db } from "../config/database.connection.js";

async function findAllDoctors(){
    return await db.query(
        `SELECT 
            d.name,
            a.address,
            a.number,
            a.district,
            a.city,
            a.state,
            s.specialty
        FROM doctors d
        JOIN specialties s ON d.specialty_id = s.id
        JOIN addresses a ON d.address_id = a.id`
    );
}

async function findDoctorByName(name){
    return await db.query(
        `SELECT * FROM doctors WHERE name=$1`,
        [name]
    )
}

async function findDoctorBySpecialty(specialty){
    return await db.query(
        `SELECT 
            d.name,
            a.address,
            a.number,
            a.district,
            a.city,
            a.state,
            s.specialty
        FROM doctors d
        JOIN specialties s ON d.specialty_id = s.id
        JOIN addresses a ON d.address_id = a.id
        WHERE s.specialty=$1;`,
        [specialty]
    )
}

async function findDoctorByState(state){
    return await db.query(
        `SELECT 
            d.name,
            a.address,
            a.number,
            a.district,
            a.city,
            a.state,
            s.specialty
        FROM doctors d
        JOIN specialties s ON d.specialty_id = s.id
        JOIN addresses a ON d.address_id = a.id
        WHERE a.state=$1;`,
        [state]
    )
}

async function findDoctorByCity(city){
    return await db.query(
        `SELECT 
            d.name,
            a.address,
            a.number,
            a.district,
            a.city,
            a.state,
            s.specialty
        FROM doctors d
        JOIN specialties s ON d.specialty_id = s.id
        JOIN addresses a ON d.address_id = a.id
        WHERE a.city=$1;`,
        [city]
    )
}

async function findDoctorByDistrict(district){
    return await db.query(
        `SELECT 
            d.name,
            a.address,
            a.number,
            a.district,
            a.city,
            a.state,
            s.specialty
        FROM doctors d
        JOIN specialties s ON d.specialty_id = s.id
        JOIN addresses a ON d.address_id = a.id
        WHERE a.district=$1;`,
        [district]
    )
}

export const searchRepository = {
    findAllDoctors,
    findDoctorByName,
    findDoctorBySpecialty,
    findDoctorByState,
    findDoctorByCity,
    findDoctorByDistrict
}