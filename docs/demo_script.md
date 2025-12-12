# SkyBridge – 2 Minute Demo Script

## 0:00 – 0:20 → Problem
Airlines often fly with unused cargo capacity, while urgent shipments struggle to find space.
SkyBridge solves this by allowing airlines to swap and bid cargo capacity using a token-based system.

---

## 0:20 – 0:40 → Core Idea
Each cargo request is converted into tokens based on:
- weight
- volume
- distance
- urgency (priority)

This creates a fair, transparent pricing mechanism for cargo swaps.

---

## 0:40 – 1:15 → Data Foundations
We use:
- Real Indian airports (DEL, BOM, BLR, HYD, etc.)
- Static, realistic flight distances
- Five priority levels with fixed multipliers

All demo data is pre-seeded to ensure deterministic behavior.

---

## 1:15 – 1:40 → Token Example
For example:
A critical medical shipment from Delhi to Mumbai,
500 kg, 2 m³, critical priority
results in ~106 tokens.

This is calculated using a documented, auditable formula.

---

## 1:40 – 2:00 → Bidding Flow
Airlines bid tokens for cargo.
The system selects the most efficient bid based on urgency and availability.

SkyBridge ensures critical cargo moves first,
while still optimizing airline utilization.
