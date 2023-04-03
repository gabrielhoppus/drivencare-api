import { Router } from "express";
import patientController from "../controllers/patient.controller.js";
import { patientSchema } from "../schemas/patient.schema.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { loginSchema } from "../schemas/login.schema.js";

const patientRoutes = Router();

patientRoutes.post('/signup', validateSchema(patientSchema), patientController.createPatient);
patientRoutes.post('/signin', validateSchema(loginSchema), patientController.loginPatient);

export default patientRoutes