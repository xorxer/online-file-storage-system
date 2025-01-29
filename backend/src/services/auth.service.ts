import { Account, ID } from 'node-appwrite';
import { account } from '../config/appwrite';

export class AuthService {
    private account: Account;

    constructor() {
        this.account = account;
    }

    async signup(email: string, password: string, name: string) {
        try {
            const user = await this.account.create(ID.unique(), email, password, name);
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