import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { handleError } from '../utils/errorHandler';

export const authController = (authService: AuthService) => {
    return {
        // Handle user signup
        signup: async (req: Request, res: Response) => {
            const { email, password, name } = req.body;

            try {
                const user = await authService.signup({email, password, name});
                res.status(201).json(user);
            } catch (error) {
                handleError(res, error);
            }
        },

        // Handle user login
        login: async (req: Request, res: Response) => {
            const { email, password } = req.body;

            try {
                const session = await authService.login({email, password});
                res.status(200).json(session);
            } catch (error) {
              handleError(res, error);
            }
        }
    }
}