import { useState } from "react";
import { calculateTokens } from "../api/client";

export default function TokenEstimator() {
  const [weightKg, setWeightKg] = useState("");
  const [priority, setPriority] = useState("NORMAL");
  const [tokens, setTokens] = useState<number | null>(null);

  async function calculate() {
    const res = await calculateTokens({
      weightKg: Number(weightKg),
      priority,
    });
    setTokens(res.tokens);
  }

  return (
    <div>
      <h2>Token Estimator</h2>

      <input
        placeholder="Weight (kg)"
        value={weightKg}
        onChange={(e) => setWeightKg(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="NORMAL">Normal</option>
        <option value="HIGH">High</option>
        <option value="MEDICAL">Medical</option>
      </select>

      <button onClick={calculate}>Estimate</button>

      {tokens !== null && <p>Estimated Tokens: {tokens}</p>}
    </div>
  );
}
