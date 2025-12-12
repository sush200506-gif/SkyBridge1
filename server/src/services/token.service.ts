type Priority =
  | "CRITICAL"
  | "HIGH"
  | "STANDARD"
  | "ECONOMY"
  | "DEFERRED";

const PRIORITY_MULTIPLIER: Record<Priority, number> = {
  CRITICAL: 1.6,
  HIGH: 1.3,
  STANDARD: 1.0,
  ECONOMY: 0.8,
  DEFERRED: 0.5,
};

interface TokenInput {
  weightKg: number;
  volumeM3: number;
  distanceKm: number;
  priority: Priority;
}

/**
 * Calculates tokens using the FIXED SkyBridge formula
 */
export function calculateTokens(input: TokenInput): number {
  const { weightKg, volumeM3, distanceKm, priority } = input;

  const base = 0.1 * weightKg + 2 * volumeM3;
  const distanceFactor = 1 + distanceKm / 5000;
  const priorityFactor = PRIORITY_MULTIPLIER[priority];

  const tokens = base * distanceFactor * priorityFactor;

  // round to 2 decimals for consistency
  return Math.round(tokens * 100) / 100;
}
