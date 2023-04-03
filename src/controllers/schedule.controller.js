import scheduleService from "../services/schedule.service.js";

async function makeAppointment(req, res, next) {
    const { hour, time, doctor_id } = req.body;
    try {
        await scheduleService.makeAppointment({ hour, time, doctor_id });
        return res.send(201)
    } catch (err) {
        next(err);
    }
}

async function listAppointments(req, res, next) {
    const patient_id = req.body;
    try {
        const appointments = await scheduleService.listAppointments(patient_id);

        return res.send({ appointments });
    } catch (err) {
        next(err);
    }
}

async function confirmAppointment(req, res, next) {
    const { doctor_id, appointment_id } = req.body;
    try {
        await scheduleService.confirmAppointment({doctor_id, appointment_id});
        return res.send(200);
    } catch (err) {
        next(err);
    }
}

async function cancelAppointment(req, res, next) {
    const { doctor_id, appointment_id } = req.body;
    try {
        await scheduleService.cancelAppointment({doctor_id, appointment_id});
        return res.send(204);
    } catch (err) {
        next(err);
    }
}

export default {
    makeAppointment,
    listAppointments,
    confirmAppointment,
    cancelAppointment
}