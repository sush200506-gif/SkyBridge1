import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Token routes
import { registerTokenRoutes } from "./src/routes/tokens.routes";

// Cargo routes
import { registerCargoRoutes } from "./src/routes/cargo.routes";

// Bid routes
import { registerBidRoutes } from "./src/routes/bids.routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // prefix all routes with /api

  // Register token-related APIs
  registerTokenRoutes(app);

  // Register cargo-related APIs
  registerCargoRoutes(app);

  // Register bid-related APIs
  registerBidRoutes(app);

  // More routes (bid acceptance, etc.) will be added here

  return httpServer;
}
