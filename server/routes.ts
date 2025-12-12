import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// 👇 ADD THIS IMPORT
import { registerTokenRoutes } from "./src/routes/tokens.routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // prefix all routes with /api

  // 👇 REGISTER TOKEN ROUTES
  registerTokenRoutes(app);

  // other routes will be added here later (cargo, bids, etc.)

  return httpServer;
}

