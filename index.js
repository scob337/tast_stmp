import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';  
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
app.use(cors());
app.use('/api/contact', contactRoutes);

const port = process.env.PORT || 5000;
app.use(express.json());

app.listen(port, () => {
  
  console.log(`Server running on port ${port}`);
});
