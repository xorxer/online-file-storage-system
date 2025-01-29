import { Response } from 'express';

export const handleError = (res: Response, error: any) => {
    console.error(error); // Log the error for debugging purposes
    res.status(error.code || 500).json({
        success: false,
        message: error.message || 'Internal Server Error',
    });
};
