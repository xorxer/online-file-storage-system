import express from 'express';
import cors from 'cors';
import { authRoutes } from './routes/auth.routes';

export const createServer = () => {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Routes
  app.use('/auth', authRoutes());
  
  // Health check
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
  });

  return app;
};