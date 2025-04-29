import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';  
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
app.use(cors());
app.use('/api/contact', contactRoutes);

const allowedOrigins = [
  'http://localhost:5000',  // لو أنت شغال على localhost
  'https://divaniworld.com',
  'http://localhost:3000'
  
];

app.use(cors({
  origin: function(origin, callback) {
    // إذا لم يكن الـ origin موجود، نسمح بالوصول
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'], // تحديد الطرق المسموح بها
}));
const port = process.env.PORT || 5000;
app.use(express.json());

app.listen(port, () => {
  
  console.log(`Server running on port ${port}`);
});
