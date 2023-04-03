import { Router } from 'express';
import patientRoutes from './patient.routes.js';
import doctorRoutes from './doctor.routes.js';
import searchRoutes from './search.routes.js';
import scheduleRoutes from './schedule.routes.js';
import historyRoutes from './history.routes.js';

const router = Router();


router.use('/patient', patientRoutes);
router.use('/doctor', doctorRoutes);
router.use('/search', searchRoutes);
router.use('/schedule', scheduleRoutes);
router.use('/history', historyRoutes);


export default router;