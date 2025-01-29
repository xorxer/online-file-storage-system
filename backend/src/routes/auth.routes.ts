import express from 'express';
import { AuthService } from '../services/auth.service';
import { authController } from '../controllers/auth.controller';

const authService = new AuthService();
const controller = authController(authService);

export const authRoutes = () => {
  const router = express.Router();
  
  // Signup route
  router.post('/signup', controller.signup);
  
  // Login route
  router.post('/login', controller.login);
  return router;
};