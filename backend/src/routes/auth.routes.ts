import express from 'express';
import { AuthService } from '../services/auth.service';
import { authController } from '../controllers/auth.controller';
import { account } from '../config/appwrite';

const authService = new AuthService(account);
const controller = authController(authService);

export const authRoutes = () => {
  const router = express.Router();
  
  // Signup route
  router.post('/signup', controller.signup);
  
  // Login route
  router.post('/login', controller.login);
  return router;
};