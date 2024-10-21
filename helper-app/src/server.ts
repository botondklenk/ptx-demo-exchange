import express, { Application } from "express";
import cors from "cors";
import { baseConnection, catalogConnection } from "./config/database";
import { setupRoutes } from "./routes";
import { invalidEndpointHandler } from "./middleware/invalidEndpointHandler";
import { globalErrorHandler } from "./middleware/globalErrorHandler";
import swaggerUI from "swagger-ui-express";
import swaggerSpec from "../docs/swagger.json";
import { CONFIG } from "./config/environment";
import { requestLogger } from "./middleware/requestLogger";

export const startServer = async (testPort?: number) => {
  const app: Application = express();
  const port = testPort || CONFIG.port || 3000;

  app.use(express.json());
  app.use(cors());

  app.use(requestLogger);

  app.get("/health", (_, res) => {
    res.json({ status: "OK" });
  });
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

  await setupRoutes(app);

  app.use(invalidEndpointHandler);
  app.use(globalErrorHandler);

  const server = app.listen(port, () => {
    console.log(`Helper app running on: http://localhost:${port}`);
  });

  return { server };
};