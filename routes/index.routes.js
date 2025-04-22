// /Routes/index.routes.js
import express from 'express';
import { addSchool, listSchool , getAllSchools } from '../controller/School.controller.js';

const router = express.Router();

router.post('/addSchool', addSchool);
router.get('/listSchools', listSchool);
router.get('/getAllSchools', getAllSchools);

export default router;
