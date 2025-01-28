import { Account } from 'node-appwrite';

export class AuthService {
    private account: Account;

    constructor(account: Account) {
        this.account = account;
    }

    async signup(email: string, password: string, name: string) {
        try {
            const user = await this.account.create('unique()', email, password, name);
            return user;
        } catch (error) {
            throw new Error('Failed to create user');
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