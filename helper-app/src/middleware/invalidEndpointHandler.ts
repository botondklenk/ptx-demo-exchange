import { Request, Response, NextFunction } from "express";

export const invalidEndpointHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(404).json({ error: "Invalid endpoint" });
};