import { useEffect, useState } from "react";
import { getCargoList } from "../api/client";

type Cargo = {
  id: number;
  origin: string;
  destination: string;
  weightKg: number;
  priority: string;
};

export default function Dashboard() {
  const [cargo, setCargo] = useState<Cargo[]>([]);

  useEffect(() => {
    getCargoList().then(setCargo);
  }, []);

  return (
    <div>
      <h2>Live Cargo Dashboard</h2>

      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Origin</th>
            <th>Destination</th>
            <th>Weight (kg)</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {cargo.map((c) => (
            <tr key={c.id}>
              <td>{c.origin}</td>
              <td>{c.destination}</td>
              <td>{c.weightKg}</td>
              <td>{c.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
