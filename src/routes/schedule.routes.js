import { Router } from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import scheduleController from "../controllers/schedule.controller.js";

const scheduleRoutes = Router();

scheduleRoutes.post('/appointment', authMiddleware.authValidation, scheduleController.makeAppointment);
scheduleRoutes.get('/appointments', authMiddleware.authValidation, scheduleController.listAppointments);
scheduleRoutes.patch('/confirm', authMiddleware.authValidation, scheduleController.confirmAppointment);
scheduleRoutes.patch('/cancel', authMiddleware.authValidation, scheduleController.cancelAppointment);

export default scheduleRoutes;