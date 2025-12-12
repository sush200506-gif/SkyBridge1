import { db } from "./db/db";
import { airlines, cargo, bids } from "./db/schema";
import { calculateTokens } from "./services/token.service";

async function seed() {
  // Airlines
  await db.insert(airlines).values([
    { name: "Airline A", tokenBalance: 1000 },
    { name: "Airline B", tokenBalance: 1000 },
  ]);

  // Cargo
  const requiredTokens = calculateTokens({
    weightKg: 500,
    volumeM3: 3,
    distanceKm: 7000,
    priority: "HIGH",
  });

  const cargoResult = await db.insert(cargo).values({
    origin: "BLR",
    destination: "FRA",
    weightKg: 500,
    volumeM3: 3,
    distanceKm: 7000,
    priority: "HIGH",
    requiredTokens,
    status: "OPEN",
  });

  const cargoId = Number(cargoResult.lastInsertRowid);

  // Bids
  await db.insert(bids).values([
    {
      cargoId,
      airlineId: 1,
      bidTokens: 420,
      etaHours: 36,
      status: "PENDING",
    },
    {
      cargoId,
      airlineId: 2,
      bidTokens: 390,
      etaHours: 40,
      status: "PENDING",
    },
  ]);

  console.log("✅ Seed data created");
}

seed();
