import errors from "../errors/index.js";
import { scheduleRepository } from "../repositories/schedule.repository.js";
import dayjs from "dayjs";

async function listDates() {
    const initialDate = dayjs(Date.now())
    const finishDate = dayjs().calendar(dayjs(initialDate + 14))

}

async function scheduleAppointment({ day, hour, doctor_id }) {
    const { patient_id } = res.locals.user;
    const { rowCount } = await scheduleRepository.checkOpenSchedule({ day, hour, doctor_id })
    if (rowCount) throw errors.conflictTimeError(hour);

    await scheduleRepository.makeAppointment({ day, hour, doctor_id, patient_id })
}

async function listAppointments(patient_id) {
    const { rows, rowCount } = await scheduleRepository.listAppointments(patient_id)
    if (!rowCount) throw errors.notFoundError();
    return rows;
}

async function confirmAppointment({ doctor_id, appointment_id }) {
    const { rowCount } = await scheduleRepository.findAppointmentById(appointment_id)
    if (!rowCount) throw errors.notFoundError();

    await scheduleRepository.confirmAppointment({doctor_id, appointment_id})
}

async function cancelAppointment({ doctor_id, appointment_id }) {
    const { rowCount } = await scheduleRepository.findAppointmentById(appointment_id)
    if (!rowCount) throw errors.notFoundError();

    await scheduleRepository.cancelAppointment({doctor_id, appointment_id})
}

export default {
    listDates,
    scheduleAppointment,
    listAppointments,
    confirmAppointment,
    cancelAppointment
}
