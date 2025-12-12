const API_BASE = "/api";

export async function calculateTokens(payload: {
  weightKg: number;
  volumeM3: number;
  origin: string;
  destination: string;
  priority: string;
}) {
  const res = await fetch(`${API_BASE}/tokens/calculate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Token calculation failed");
  return res.json();
}

export async function createCargo(payload: any) {
  const res = await fetch(`${API_BASE}/cargo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Cargo submission failed");
  return res.json();
}

export async function getCargo() {
  const res = await fetch(`${API_BASE}/cargo`);
  if (!res.ok) throw new Error("Failed to fetch cargo");
  return res.json();
}

export async function createBid(payload: any) {
  const res = await fetch(`${API_BASE}/bids`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Bid creation failed");
  return res.json();
}

export async function acceptBid(bidId: string) {
  const res = await fetch(`${API_BASE}/bids/${bidId}/accept`, {
    method: "POST",
  });

  if (!res.ok) throw new Error("Bid acceptance failed");
  return res.json();
}

