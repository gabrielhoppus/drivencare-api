import { Router } from "express";
import searchController from "../controllers/search.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const searchRoutes = Router();

searchRoutes.get('/', authMiddleware.authValidation, searchController.findAllDoctors);
searchRoutes.get('/name/:name', authMiddleware.authValidation, searchController.findDoctorByName);
searchRoutes.get('/specialty/:specialty', authMiddleware.authValidation, searchController.findDoctorBySpecialty);
searchRoutes.get('/state/:state', authMiddleware.authValidation, searchController.findDoctorByState);
searchRoutes.get('/city/:city', authMiddleware.authValidation, searchController.findDoctorByCity);
searchRoutes.get('/district/:district', authMiddleware.authValidation, searchController.findDoctorByDistrict);

export default searchRoutes;