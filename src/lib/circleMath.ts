export const PI = Math.PI;

export type LengthUnit = "cm" | "m" | "mm" | "in" | "ft";

/** Conversion factors to centimeters (base unit for math). */
export const UNIT_TO_CM: Record<LengthUnit, number> = {
  mm: 0.1,
  cm: 1,
  m: 100,
  in: 2.54,
  ft: 30.48,
};

export const UNIT_LABELS: Record<LengthUnit, string> = {
  mm: "millimeters (mm)",
  cm: "centimeters (cm)",
  m: "meters (m)",
  in: "inches (in)",
  ft: "feet (ft)",
};

export type CircleValues = {
  radius: number;
  diameter: number;
  circumference: number;
  area: number;
};

export type CircleInputMode = "radius" | "diameter" | "circumference" | "area";

export function toCm(value: number, unit: LengthUnit): number {
  return value * UNIT_TO_CM[unit];
}

export function fromCm(valueCm: number, unit: LengthUnit): number {
  return valueCm / UNIT_TO_CM[unit];
}

export function areaToCm2(area: number, unit: LengthUnit): number {
  const f = UNIT_TO_CM[unit];
  return area * f * f;
}

export function areaFromCm2(areaCm2: number, unit: LengthUnit): number {
  const f = UNIT_TO_CM[unit];
  return areaCm2 / (f * f);
}

/** Solve the full circle from one known measurement (in the same unit). */
export function solveCircle(
  mode: CircleInputMode,
  value: number,
  unit: LengthUnit = "cm"
): CircleValues | null {
  if (!Number.isFinite(value) || value <= 0) return null;

  let radiusCm: number;

  switch (mode) {
    case "radius":
      radiusCm = toCm(value, unit);
      break;
    case "diameter":
      radiusCm = toCm(value, unit) / 2;
      break;
    case "circumference":
      radiusCm = toCm(value, unit) / (2 * PI);
      break;
    case "area": {
      const areaCm2 = areaToCm2(value, unit);
      radiusCm = Math.sqrt(areaCm2 / PI);
      break;
    }
  }

  const diameterCm = 2 * radiusCm;
  const circumferenceCm = 2 * PI * radiusCm;
  const areaCm2 = PI * radiusCm * radiusCm;

  return {
    radius: fromCm(radiusCm, unit),
    diameter: fromCm(diameterCm, unit),
    circumference: fromCm(circumferenceCm, unit),
    area: areaFromCm2(areaCm2, unit),
  };
}

export function formatNumber(n: number, digits = 6): string {
  if (!Number.isFinite(n)) return "—";
  if (Math.abs(n) >= 1e6 || (Math.abs(n) > 0 && Math.abs(n) < 1e-4)) {
    return n.toExponential(4);
  }
  const fixed = n.toFixed(digits);
  return fixed.replace(/\.?0+$/, "") || "0";
}

export function circumferenceFromRadius(r: number): number {
  return 2 * PI * r;
}

export function circumferenceFromDiameter(d: number): number {
  return PI * d;
}

export function diameterFromCircumference(c: number): number {
  return c / PI;
}

export function radiusFromCircumference(c: number): number {
  return c / (2 * PI);
}

export function areaFromCircumference(c: number): number {
  return (c * c) / (4 * PI);
}

export function areaFromRadius(r: number): number {
  return PI * r * r;
}
