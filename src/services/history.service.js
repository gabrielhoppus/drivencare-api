import errors from "../errors/index.js";
import { historyRepository } from "../repositories/history.repository.js"

async function doctorHistory(doctor_id) {
    const { rows, rowCount } = await historyRepository.doctorHistory(doctor_id)
    if (rowCount) throw errors.notFoundError();
    return rows;
}

async function patientHistory(patient_id){
    const { rows, rowCount } = await historyRepository.patientHistory(patient_id)
    if (rowCount) throw errors.notFoundError();
    return rows;
}

export default {
    doctorHistory,
    patientHistory
}