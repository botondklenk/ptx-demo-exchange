import { Schema, Document, Connection, Model } from "mongoose";
import { catalogConnection } from "../config/database";

interface ICategory extends Document {
  category: string;
  description: string;
}

const categorySchema = new Schema<ICategory>({
  category: { type: String, required: true },
  description: { type: String, required: true },
});

let Category: Model<ICategory>;

const initializeCategoryModel = async (): Promise<void> => {
  const connection: Connection = await catalogConnection;
  Category = connection.model<ICategory>("Category", categorySchema);
};

initializeCategoryModel().catch((error) => {
  console.error("Error initializing Category model:", error);
});

export { Category };