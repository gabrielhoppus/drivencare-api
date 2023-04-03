import errors from "../errors/index.js";
import { searchRepository} from "../repositories/search.repository.js";

async function findAllDoctors(){
    const { rows, rowCount } = await searchRepository.findAllDoctors();
    if (!rowCount) throw errors.notFoundError();
    return rows;
}

async function findDoctorByName(name){
    const { rows, rowCount } = await searchRepository.findDoctorByName(name);
    if (!rowCount) throw errors.notFoundError();
    return rows;
}

async function findDoctorBySpecialty(specialty){
    const { rows, rowCount } = await searchRepository.findDoctorBySpecialty(specialty);
    if (!rowCount) throw errors.notFoundError();
    return rows;
}

async function findDoctorByState(state){
    const { rows, rowCount } = await searchRepository.findDoctorByState(state);
    if (!rowCount) throw errors.notFoundError();
    return rows;
}

async function findDoctorByCity(city){
    const { rows, rowCount } = await searchRepository.findDoctorByCity(city);
    if (!rowCount) throw errors.notFoundError();
    return rows;
}

async function findDoctorByDistrict(district){
    const { rows, rowCount } = await searchRepository.findDoctorByDistrict(district);
    if (!rowCount) throw errors.notFoundError();
    return rows;
}

export default {
    findAllDoctors,
    findDoctorByName,
    findDoctorByState,
    findDoctorBySpecialty,
    findDoctorByCity,
    findDoctorByDistrict
};