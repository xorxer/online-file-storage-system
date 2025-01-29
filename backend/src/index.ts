import { createServer } from './server.js';
import * as dotenv from 'dotenv';
// Load environment variables
dotenv.config();

// Create and start the server
const PORT = process.env.PORT || 3000;
const server = createServer();

server.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});