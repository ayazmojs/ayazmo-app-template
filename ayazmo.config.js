import { config } from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';

// Determine the environment and construct the filename
const environment = process.env.NODE_ENV || 'development';
const envPath = path.resolve(process.cwd(), `.env.${environment}`);

// Check if the environment-specific file exists
if (fs.existsSync(envPath)) {
  config({ path: envPath });
} else {
  config(); // Load the default .env file
}

export default {
  database: {
    // Default database configurations (can be overridden with environment variables)
    type: "postgresql",
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USERNAME || 'ayazmo-user',
    password: process.env.DB_PASSWORD || 'ayazmo-password',
    dbName: process.env.DB_DATABASE || 'ayazmo-dev',
    debug: false,
    // Add any other database-specific configurations
  },
  plugins: [
    // Activate plugins here
  ]
}