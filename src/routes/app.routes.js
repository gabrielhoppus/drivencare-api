import { Router } from 'express';
import pacientRoutes from './pacient.routes.js';

const router = Router();


router.use('/pacient', pacientRoutes);


export default router;