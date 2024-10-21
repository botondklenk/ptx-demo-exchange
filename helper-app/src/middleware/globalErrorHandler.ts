import { Request, Response, NextFunction } from "express";

export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err); // Log the error for debugging purposes

  // Handle specific error types and send appropriate response
  if (err.name === "ValidationError") {
    return res.status(400).json({ error: "Validation error" });
  }

  // Handle other error types and send generic response
  return res.status(500).json({ error: "Internal server error" });
};
