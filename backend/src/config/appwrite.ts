import { Client, Account } from 'node-appwrite';

// Initialize Appwrite client
const appwriteClient = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT!)
  .setProject(process.env.APPWRITE_PROJECT_ID!)
  .setKey(process.env.APPWRITE_API_KEY!);

// Initialize Appwrite Account service
const account = new Account(appwriteClient);

export { account };