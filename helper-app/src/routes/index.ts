import { Application, Router } from "express";
import { getCategory } from "../controllers/category.controller";
import { getData, postData } from "../controllers/data.controller";

export const setupRoutes = (app: Application) => {
  const router = Router();

  // Define the routes
  router.get("/category", getCategory);
  router.get("/data", getData);
  router.post("/data", postData);

  // Use the router with a prefix
  app.use("/", router);
};

export default setupRoutes;