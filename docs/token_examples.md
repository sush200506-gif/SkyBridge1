# SkyBridge Token Calculation Examples

Token Formula:

Tokens =
(0.1 × weightKg + 2 × volumeM3)
× (1 + distanceKm / 5000)
× priorityMultiplier

---

## Example 1: Emergency Medical Cargo (CRITICAL)

- Route: DEL → BOM
- Distance: 1150 km
- Weight: 500 kg
- Volume: 2.0 m³
- Priority: CRITICAL (1.6)

Base =
0.1 × 500 + 2 × 2.0  
= 50 + 4  
= 54

Distance Factor =
1 + (1150 / 5000)  
= 1.23

Tokens =
54 × 1.23 × 1.6  
≈ **106.3 tokens**

---

## Example 2: Electronics Shipment (HIGH)

- Route: BLR → MAA
- Distance: 290 km
- Weight: 1200 kg
- Volume: 4.0 m³
- Priority: HIGH (1.3)

Base =
0.1 × 1200 + 2 × 4  
= 120 + 8  
= 128

Distance Factor =
1 + (290 / 5000)  
= 1.058

Tokens =
128 × 1.058 × 1.3  
≈ **176.0 tokens**

---

## Example 3: Garments Export (STANDARD)

- Route: BOM → CCU
- Distance: 1650 km (approx via DEL)
- Weight: 2000 kg
- Volume: 8.0 m³
- Priority: STANDARD (1.0)

Base =
0.1 × 2000 + 2 × 8  
= 200 + 16  
= 216

Distance Factor =
1 + (1650 / 5000)  
= 1.33

Tokens =
216 × 1.33 × 1.0  
≈ **287.3 tokens**

---

## Example 4: Bulk Low-Priority Cargo (DEFERRED)

- Route: HYD → BLR
- Distance: 500 km
- Weight: 3000 kg
- Volume: 12.0 m³
- Priority: DEFERRED (0.5)

Base =
0.1 × 3000 + 2 × 12  
= 300 + 24  
= 324

Distance Factor =
1 + (500 / 5000)  
= 1.10

Tokens =
324 × 1.10 × 0.5  
≈ **178.2 tokens**
