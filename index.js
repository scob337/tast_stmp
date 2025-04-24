import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';  // استيراد dotenv
import contactRoutes from './routes/contact.js';

// تحميل المتغيرات من ملف .env
dotenv.config();

const app = express();
app.use(cors());
app.use('/contact', contactRoutes);

// استخدام المتغير PORT من .env
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
