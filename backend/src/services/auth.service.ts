import { Account, ID, Databases, Models } from 'node-appwrite';
import { account, databases } from '../config/appwrite';
import { UserMetadata, AuthResponse, SignupData, LoginData } from '../types/auth.types';
import 'dotenv/config';

export class AuthService {
    private account: Account;
    private databases: Databases;
    private databaseId: string;
    private usersCollectionId: string;

    constructor() {
        this.account = account;
        this.databases = databases;
        this.databaseId = process.env.APPWRITE_DATABASE_ID!;
        this.usersCollectionId = process.env.APPWRITE_USERS_COLLECTION_ID!;
    }

    async signup({ email, password, name }: SignupData): Promise<AuthResponse | string> {
        try {
            const user = await this.account.create(ID.unique(), email, password, name);

            const metadata: Partial<UserMetadata> = {
                userId: user.$id,
                storageUsed: 0,
                storageLimit: 1073741824,
                email: email,
                pfp: ''
              };

            await this.databases.createDocument<UserMetadata>(
                this.databaseId,
                this.usersCollectionId,
                user.$id,
                metadata
            );

            const session = await this.account.createEmailPasswordSession(email, password);
            
            return { user, session };
        } catch (error) {
            return (error as Error).message;
        }
    }

    async login({ email, password }: LoginData): Promise<Models.Session> {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            return session;
        } catch (error) {
            throw new Error('Invalid credentials');
        }
    }
}
