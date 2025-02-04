import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api/api';

interface Credentials {
  email: string;
  password: string;
}

interface UserData {
  name: string;
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: Credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (userData: UserData) => {
    const response = await api.post('/auth/signup', userData);
    console.log(response);
    return response.data;
  }
);
