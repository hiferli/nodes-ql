import express from 'express'
import { getAllEmployees, uploadEmployee } from '../Controllers/EmployeeControllers.js';

const router = express.Router();

router.get('/' , getAllEmployees)
router.post('/' , uploadEmployee)

export default router;