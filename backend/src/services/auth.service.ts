import { Account, ID, Databases } from 'node-appwrite';
import { account, databases } from '../config/appwrite';
import 'dotenv/config';

export class AuthService {
    private account: Account;
    private databases: Databases; 

    constructor() {
        this.account = account;
        this.databases = databases;
    }

    async signup(email: string, password: string, name: string) {
        try {
            // Create user account
            const user = await this.account.create(ID.unique(), email, password, name);

            // Create metadata document for the user
            await this.databases.createDocument(
                process.env.APPWRITE_DB!,
                process.env.APPWRITE_USERS_COLLECTION!,
                user.$id,
                {
                    userId: user.$id,
                    storageUsed: 0,
                    storageLimit: 1073741824,
                }
            )

            return user;
        } catch (error) {
            return (error as Error).message;
        }
    }

    async login(email: string, password: string) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            return session;
        } catch (error) {
            throw new Error('Invalid credentials');
        }
    }
}