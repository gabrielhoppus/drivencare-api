import { Router } from 'express';
import patientRoutes from './patient.routes.js';
import doctorRoutes from './doctor.routes.js';
import searchRoutes from './search.routes.js';

const router = Router();


router.use('/patient', patientRoutes);
router.use('/doctor', doctorRoutes);
router.use('/search', searchRoutes);


export default router;