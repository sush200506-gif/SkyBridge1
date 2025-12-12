import { Express, Request, Response } from "express";
import { db } from "../db/db";
import { cargo } from "../db/schema";
import { calculateTokens } from "../services/token.service";

export function registerCargoRoutes(app: Express) {
  // CREATE CARGO
  app.post("/api/cargo", async (req: Request, res: Response) => {
    const {
      origin,
      destination,
      weightKg,
      volumeM3,
      distanceKm,
      priority,
    } = req.body;

    const requiredTokens = calculateTokens({
      weightKg,
      volumeM3,
      distanceKm,
      priority,
    });

    const result = await db.insert(cargo).values({
      origin,
      destination,
      weightKg,
      volumeM3,
      distanceKm,
      priority,
      requiredTokens,
      status: "OPEN",
    });

    res.json({
      id: result.lastInsertRowid,
      requiredTokens,
      status: "OPEN",
    });
  });

  // GET ALL CARGO
  app.get("/api/cargo", async (_req: Request, res: Response) => {
    const allCargo = await db.select().from(cargo);
    res.json(allCargo);
  });
}
