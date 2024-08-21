import { config } from "dotenv";
import fs from "node:fs";
import path from "node:path";

// Determine the environment and construct the filename
const environment = process.env.NODE_ENV || "development";
const envPath = path.resolve(process.cwd(), `.env.${environment}`);

// Check if the environment-specific file exists
if (fs.existsSync(envPath)) {
  config({ path: envPath });
} else {
  config(); // Load the default .env file
}

export default {
  app: {
    server: {
      port: process.env.PORT || 3000,
      host: process.env.HOST || "0.0.0.0",
    },
    eventEmitterType: "memory",
  },
  admin: {
    enabled: true,
    enabledAuthProviders: [],
  },
  database: {
    type: "postgresql",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USERNAME || "ayazmo-user",
    password: process.env.DB_PASSWORD || "ayazmo-password",
    dbName: process.env.DB_DATABASE || "ayazmo-dev",
    debug: false, // Set to true to enable debug mode
  },
  plugins: []
}