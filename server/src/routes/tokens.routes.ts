import { Express, Request, Response } from "express";
import { calculateTokens } from "../services/token.service";

export function registerTokenRoutes(app: Express) {
  app.post("/api/tokens/calculate", (req: Request, res: Response) => {
    const { weightKg, volumeM3, distanceKm, priority } = req.body;

    const tokens = calculateTokens({
      weightKg,
      volumeM3,
      distanceKm,
      priority,
    });

    res.json({ tokens });
  });
}
