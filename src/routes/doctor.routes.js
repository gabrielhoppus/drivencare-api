import { Router } from "express";
import doctorController from "../controllers/doctor.controller.js";
import { doctorSchema } from "../schemas/doctor.schema.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { loginSchema } from "../schemas/login.schema.js";

const doctorRoutes = Router();

doctorRoutes.post('/signup', validateSchema(doctorSchema), doctorController.createDoctor);
doctorRoutes.post('/signin', validateSchema(loginSchema), doctorController.loginDoctor);

export default doctorRoutes;