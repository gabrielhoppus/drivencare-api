import historyService from "../services/history.service.js";

async function doctorHistory(req, res, next) {
    const { doctor_id } = req.body;
    try {
        const history = await historyService.doctorHistory({ doctor_id });
        return res.send({ history })
    } catch (err) {
        next(err);
    }
}

async function patientHistory(req, res, next) {
    const { patient_id } = req.body;
    try {
        const history = await historyService.doctorHistory({ patient_id });
        return res.send({ history })
    } catch (err) {
        next(err);
    }
}

export default {
    doctorHistory,
    patientHistory
}