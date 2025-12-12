import { useState } from "react";
import { calculateTokens, createCargo } from "../api/client";
import { Priority } from "../types";

export default function BookCargo() {
  const [form, setForm] = useState({
    weightKg: "",
    volumeM3: "",
    origin: "",
    destination: "",
    priority: "STANDARD" as Priority,
  });

  const [tokens, setTokens] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const estimateTokens = async () => {
    setLoading(true);
    try {
      const res = await calculateTokens({
        weightKg: Number(form.weightKg),
        volumeM3: Number(form.volumeM3),
        origin: form.origin,
        destination: form.destination,
        priority: form.priority,
      });
      setTokens(res.tokens);
    } catch {
      alert("Failed to estimate tokens");
    } finally {
      setLoading(false);
    }
  };

  const submitCargo = async () => {
    try {
      await createCargo({
        ...form,
        weightKg: Number(form.weightKg),
        volumeM3: Number(form.volumeM3),
      });
      alert("Cargo submitted successfully");
    } catch {
      alert("Cargo submission failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Book Cargo</h1>

      <input
        name="weightKg"
        placeholder="Weight (kg)"
        value={form.weightKg}
        onChange={handleChange}
