import { Router } from 'express';
import patientRoutes from './patient.routes.js';
import doctorRoutes from './doctor.routes.js';

const router = Router();


router.use('/patient', patientRoutes);
router.use('/doctor', doctorRoutes);


export default router;