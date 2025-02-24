import { Models } from 'node-appwrite';

export interface UserMetadata extends Models.Document {
    userId: string;
    storageUsed: number;
    storageLimit: number;
    email: string;
    pfp: string;
}

export interface AuthResponse {
  user: Models.User<Models.Preferences>;
  session: Models.Session;
}

export interface SignupData {
  email: string;
  password: string;
  name: string;
}

export interface LoginData {
  email: string;
  password: string;
}
