import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

function handleAuthError(error: unknown): { message: string; status: number } {
    if (error instanceof Error) {
      if ('code' in error && typeof error.code === 'number') {
        // Handle Google API specific errors
        switch (error.code) {
          case 401:
            return { message: 'Authentication failed: ' + error.message, status: 401 };
          case 403:
            return { message: 'Insufficient permissions: ' + error.message, status: 403 };
          default:
            return { message: 'Auth error: ' + error.message, status: 400 };
        }
      }
      return { message: error.message, status: 400 };
    }
    return { message: 'An unexpected error occurred', status: 500 };
}

export const authController = (authService: AuthService) => {
    return {
        // Handle user signup
        signup: async (req: Request, res: Response) => {
            const { email, password, name } = req.body;

            try {
                const user = await authService.signup(email, password, name);
                res.status(201).json(user);
            } catch (error) {
                const { message, status } = handleAuthError(error);
                res.status(status).json({ error: message })
            }
        },

        // Handle user login
        login: async (req: Request, res: Response) => {
            const { email, password } = req.body;

            try {
                const session = await authService.login(email, password);
                res.status(200).json(session);
            } catch (error) {
                const { message, status } = handleAuthError(error);
                res.status(status).json({ error: message });
            }
        }
    }
}