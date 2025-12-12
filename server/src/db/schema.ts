import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";

/* =========================
   AIRLINES
========================= */
export const airlines = sqliteTable("airlines", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  tokenBalance: real("token_balance").notNull(),
});

/* =========================
   CARGO
========================= */
export const cargo = sqliteTable("cargo", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  origin: text("origin").notNull(),
  destination: text("destination").notNull(),
  weightKg: real("weight_kg").notNull(),
  volumeM3: real("volume_m3").notNull(),
  distanceKm: real("distance_km").notNull(),
  priority: text("priority").notNull(),
  requiredTokens: real("required_tokens").notNull(),
  status: text("status").notNull(), // OPEN | ASSIGNED
});

/* =========================
   BIDS
========================= */
export const bids = sqliteTable("bids", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  cargoId: integer("cargo_id").notNull(),
  airlineId: integer("airline_id").notNull(),
  bidTokens: real("bid_tokens").notNull(),
  etaHours: integer("eta_hours").notNull(),
  status: text("status").notNull(), // PENDING | ACCEPTED
});

/* =========================
   TOKEN TRANSACTIONS
========================= */
export const tokenTransactions = sqliteTable("token_transactions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  fromAirlineId: integer("from_airline_id"),
  toAirlineId: integer("to_airline_id"),
  tokens: real("tokens").notNull(),
  reason: text("reason").notNull(),
  createdAt: text("created_at").notNull(),
});
