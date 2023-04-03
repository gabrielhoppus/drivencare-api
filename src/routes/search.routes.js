import { Router } from "express";
import searchController from "../controllers/search.controller.js";

const searchRoutes = Router();

searchRoutes.get('/', searchController.findAllDoctors);
searchRoutes.get('/name/:name', searchController.findDoctorByName);
searchRoutes.get('/specialty/:specialty', searchController.findDoctorBySpecialty);
searchRoutes.get('/state/:state', searchController.findDoctorByState);
searchRoutes.get('/city/:city', searchController.findDoctorByCity);
searchRoutes.get('/district/:district', searchController.findDoctorByDistrict);

export default searchRoutes;