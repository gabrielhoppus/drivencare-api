import { Router } from "express";
import pacientController from "../controllers/pacient.controller.js";
import { pacientSchema } from "../schemas/pacient.schema.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";

const pacientRoutes = Router();

pacientRoutes.post('/signup', validateSchema(pacientSchema), pacientController.createPacient);
pacientRoutes.post('/signin', pacientController.loginPacient);

export default pacientRoutes