export type Priority =
  | "CRITICAL"
  | "HIGH"
  | "STANDARD"
  | "ECONOMY"
  | "DEFERRED";

export interface Cargo {
  id: string;
  weightKg: number;
  volumeM3: number;
  origin: string;
  destination: string;
  priority: Priority;
  tokenEstimate?: number;
  bids?: Bid[];
}

export interface Bid {
  id: string;
  cargoId: string;
  airline: string;
  tokensQuoted: number;
}
