import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import historyController from "../controllers/history.controller.js";

const historyRoutes = Router();

historyRoutes.get('/doctor', authMiddleware.authValidation, historyController.doctorHistory);
historyRoutes.get('/patient', authMiddleware.authValidation, historyController.patientHistory);

export default historyRoutes;