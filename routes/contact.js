// routes/contact.js
import express from 'express';
import multer from 'multer';
import { handleContactForm } from '../controllers/contactController.js';
import contactSchema from '../validation/contactValidation.js';
import validateRequest from '../middlewares/validateRequest.js';

const router = express.Router();
const upload = multer(); 

router.post('/', upload.none(), validateRequest(contactSchema), handleContactForm);

export default router;
