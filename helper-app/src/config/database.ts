import mongoose from "mongoose";
import { CONFIG } from "./environment";

const connectToDatabase = async (uri: string, dbName: string) => {
  try {
    const connection = await mongoose.createConnection(uri, {
      dbName: dbName,
      autoCreate: true,
    });
    console.log(`Connected to ${dbName} database`);
    return connection;
  } catch (error) {
    console.error(`Error connecting to ${dbName} database:`, error);
    throw error;
  }
};

export const baseConnection = connectToDatabase(CONFIG.databaseUri, "moodle-log");
export const catalogConnection = connectToDatabase(CONFIG.catalogDatabaseUri, "catalog");
