import { config } from "dotenv";

config();

export const CONFIG = {
  port: process.env.PORT || 3000,
  databaseUri: process.env.DATABASE_URI || "mongodb://localhost:27017/moodle-log",
  catalogDatabaseUri: process.env.CATALOG_DATABASE_URI || "mongodb://localhost:27017/catalog",
};