const API_BASE = "http://localhost:5000/api";

export async function getCargoList() {
  const res = await fetch(`${API_BASE}/cargo`);
  return res.json();
}

export async function bookCargo(data: {
  origin: string;
  destination: string;
  weightKg: number;
  priority: string;
}) {
  const res = await fetch(`${API_BASE}/cargo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function calculateTokens(data: {
  weightKg: number;
  priority: string;
}) {
  const res = await fetch(`${API_BASE}/tokens/calculate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
