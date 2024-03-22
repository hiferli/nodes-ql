import express from 'express'
import { getAllDepartments, uploadDepartment } from '../Controllers/DepartmentControllers.js';

const router = express.Router();

router.get('/' , getAllDepartments);
router.post('/' , uploadDepartment);

export default router