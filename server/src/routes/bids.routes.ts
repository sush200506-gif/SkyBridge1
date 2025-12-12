import { Express, Request, Response } from "express";
import { db } from "../db/db";
import { bids } from "../db/schema";

export function registerBidRoutes(app: Express) {
  // CREATE BID
  app.post("/api/bids", async (req: Request, res: Response) => {
    const { cargoId, airlineId, bidTokens, etaHours } = req.body;

    const result = await db.insert(bids).values({
      cargoId,
      airlineId,
      bidTokens,
      etaHours,
      status: "PENDING",
    });

    res.json({
      id: result.lastInsertRowid,
      status: "PENDING",
    });
  });
}
