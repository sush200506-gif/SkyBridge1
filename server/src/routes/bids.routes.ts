import { Express, Request, Response } from "express";
import { db } from "../db/db";
import { bids, cargo, airlines, tokenTransactions } from "../db/schema";
import { eq } from "drizzle-orm";

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

  // ACCEPT BID
  app.post("/api/bids/:id/accept", async (req: Request, res: Response) => {
    const bidId = Number(req.params.id);

    // 1. Get bid
    const [bid] = await db.select().from(bids).where(eq(bids.id, bidId));
    if (!bid) {
      return res.status(404).json({ message: "Bid not found" });
    }

    // 2. Get cargo
    const [cargoItem] = await db
      .select()
      .from(cargo)
      .where(eq(cargo.id, bid.cargoId));

    // 3. Mark bid as ACCEPTED
    await db
      .update(bids)
      .set({ status: "ACCEPTED" })
      .where(eq(bids.id, bidId));

    // 4. Mark cargo as ASSIGNED
    await db
      .update(cargo)
      .set({ status: "ASSIGNED" })
      .where(eq(cargo.id, bid.cargoId));

    // 5. Credit tokens to airline
    await db
      .update(airlines)
      .set({
        tokenBalance: airlines.tokenBalance + bid.bidTokens,
      })
      .where(eq(airlines.id, bid.airlineId));

    // 6. Record transaction
    await db.insert(tokenTransactions).values({
      fromAirlineId: null,
      toAirlineId: bid.airlineId,
      tokens: bid.bidTokens,
      reason: "Cargo Swap",
      createdAt: new Date().toISOString(),
    });

    res.json({
      message: "Bid accepted",
      cargoId: bid.cargoId,
      winningAirlineId: bid.airlineId,
      tokensTransferred: bid.bidTokens,
    });
  });
}
