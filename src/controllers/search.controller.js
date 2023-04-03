import searchService from "../services/search.service.js";

async function findAllDoctors(req, res, next) {
    try {
        const doctors = await searchService.findAllDoctors();

        return res.send({ doctors });
    } catch (err) {
        next(err);
    }
}

async function findDoctorByName(req, res, next) {
    const name = req.params.name
    try {
        const doctors = await searchService.findDoctorByName(name)
        return res.send({ doctors })
    } catch (err) {
        next(err);
    }
}

async function findDoctorBySpecialty(req, res, next) {
    const specialty = req.params.specialty
    try {
        const doctors = await searchService.findDoctorBySpecialty(specialty)
        return res.send({ doctors })
    } catch (err) {
        next(err);
    }
}

async function findDoctorByState(req, res, next) {
    const state = req.params.state
    try {
        const doctors = await searchService.findDoctorBySpecialty(state)
        return res.send({ doctors })
    } catch (err) {
        next(err);
    }
}

async function findDoctorByCity(req, res, next) {
    const city = req.params.city
    try {
        const doctors = await searchService.findDoctorBySpecialty(city)
        return res.send({ doctors })
    } catch (err) {
        next(err);
    }
}

async function findDoctorByDistrict(req, res, next) {
    const district = req.params.district
    try {
        const doctors = await searchService.findDoctorBySpecialty(district)
        return res.send({ doctors })
    } catch (err) {
        next(err);
    }
}

export default {
    findAllDoctors,
    findDoctorByName,
    findDoctorBySpecialty,
    findDoctorByState,
    findDoctorByCity,
    findDoctorByDistrict
}