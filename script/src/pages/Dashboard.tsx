import { useEffect, useState } from "react";
import { getCargo, acceptBid } from "../api/client";
import { Cargo } from "../types";

export default function Dashboard() {
  const [cargoList, setCargoList] = useState<Cargo[]>([]);

  useEffect(() => {
    getCargo().then(setCargoList);
  }, []);

  const handleAccept = async (bidId: string) => {
    try {
      await acceptBid(bidId);
      alert("Bid accepted");
    } catch {
      alert("Failed to accept bid");
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {cargoList.map((cargo) => (
        <div key={cargo.id} className="border rounded p-4 space-y-2">
          <div>
            <strong>{cargo.origin}</strong> →{" "}
            <strong>{cargo.destination}</strong>
          </div>

          <div>Priority: {cargo.priority}</div>

          <div className="mt-2">
            <h3 className="font-semibold">Bids</h3>

            {cargo.bids && cargo.bids.length > 0 ? (
              cargo.bids.map((bid) => (
                <div
                  key={bid.id}
                  className="flex justify-between border p-2 rounded mt-1"
                >
                  <span>{bid.airline}</span>
                  <span>{bid.tokensQuoted} tokens</span>
                  <button
                    onClick={() => handleAccept(bid.id)}
                    className="btn-small"
                  >
                    Accept
                  </button>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">No bids yet</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
