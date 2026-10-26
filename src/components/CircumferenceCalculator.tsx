"use client";

import { useId, useMemo, useState } from "react";
import {
  CircleInputMode,
  LengthUnit,
  UNIT_LABELS,
  formatNumber,
  solveCircle,
} from "@/lib/circleMath";

const UNITS: LengthUnit[] = ["mm", "cm", "m", "in", "ft"];

const MODE_OPTIONS: { id: CircleInputMode; label: string; hint: string }[] = [
  { id: "radius", label: "Radius (r)", hint: "Distance from center to edge" },
  { id: "diameter", label: "Diameter (d)", hint: "Full width across the circle" },
  { id: "circumference", label: "Circumference (C)", hint: "Distance around the circle" },
  { id: "area", label: "Area (A)", hint: "Space inside the circle" },
];

type Props = {
  defaultMode?: CircleInputMode;
  defaultValue?: string;
  defaultUnit?: LengthUnit;
  title?: string;
};

export default function CircumferenceCalculator({
  defaultMode = "radius",
  defaultValue = "10",
  defaultUnit = "cm",
  title = "Circumference Calculator",
}: Props) {
  const baseId = useId();
  const [mode, setMode] = useState<CircleInputMode>(defaultMode);
  const [raw, setRaw] = useState(defaultValue);
  const [unit, setUnit] = useState<LengthUnit>(defaultUnit);

  const value = Number.parseFloat(raw);
  const result = useMemo(() => solveCircle(mode, value, unit), [mode, value, unit]);

  const formulaLine = useMemo(() => {
    if (!result) return "Enter a positive number to solve the circle.";
    switch (mode) {
      case "radius":
        return `C = 2πr = 2 × π × ${formatNumber(value)} = ${formatNumber(result.circumference)} ${unit}`;
      case "diameter":
        return `C = πd = π × ${formatNumber(value)} = ${formatNumber(result.circumference)} ${unit}`;
      case "circumference":
        return `d = C ÷ π = ${formatNumber(value)} ÷ π = ${formatNumber(result.diameter)} ${unit}`;
      case "area":
        return `r = √(A ÷ π) → C = 2πr = ${formatNumber(result.circumference)} ${unit}`;
    }
  }, [mode, value, result, unit]);

  return (
    <div className="overflow-hidden rounded-3xl border border-ink/10 bg-white/90 shadow-[0_24px_60px_-28px_rgba(2,132,199,0.45)] backdrop-blur-sm">
      <div className="border-b border-ink/5 bg-gradient-to-r from-sky/10 via-white to-gold/10 px-4 py-3 sm:px-6">
        <p className="font-display text-sm font-semibold text-ink/70">{title}</p>
        <p className="text-xs text-ink/50">Enter any one value — radius, diameter, circumference, or area.</p>
      </div>

      <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <fieldset className="mb-4">
            <legend className="calc-label">I know the</legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {MODE_OPTIONS.map((opt) => {
                const active = mode === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setMode(opt.id)}
                    className={`rounded-xl border px-3 py-2.5 text-left transition ${
                      active
                        ? "border-violet bg-violet/10 text-ink shadow-sm"
                        : "border-ink/10 bg-brand-soft/60 text-ink/70 hover:border-violet/40"
                    }`}
                    aria-pressed={active}
                  >
                    <span className="block text-xs font-bold">{opt.label}</span>
                    <span className="mt-0.5 block text-[10px] leading-tight text-ink/45">{opt.hint}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mb-4 grid gap-3 sm:grid-cols-[1fr_auto]">
            <div>
              <label className="calc-label" htmlFor={`${baseId}-value`}>
                Value
              </label>
              <input
                id={`${baseId}-value`}
                className="calc-input"
                type="number"
                inputMode="decimal"
                min="0"
                step="any"
                value={raw}
                onChange={(e) => setRaw(e.target.value)}
                placeholder="e.g. 10"
              />
            </div>
            <div>
              <label className="calc-label" htmlFor={`${baseId}-unit`}>
                Unit
              </label>
              <select
                id={`${baseId}-unit`}
                className="calc-input min-w-[7.5rem]"
                value={unit}
                onChange={(e) => setUnit(e.target.value as LengthUnit)}
              >
                {UNITS.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <p className="mb-4 rounded-xl bg-brand-soft px-3 py-2 font-mono text-xs text-ink/75 sm:text-sm">
            {formulaLine}
          </p>

          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Radius (r)", value: result?.radius, accent: false },
              { label: "Diameter (d)", value: result?.diameter, accent: false },
              { label: "Circumference (C)", value: result?.circumference, accent: true },
              {
                label: "Area (A)",
                value: result?.area,
                accent: false,
                unitSuffix: ` ${unit}²`,
              },
            ].map((row) => (
              <div
                key={row.label}
                className={`rounded-2xl border px-3 py-3 ${
                  row.accent
                    ? "border-gold/40 bg-gradient-to-br from-gold/15 to-sky/10"
                    : "border-ink/8 bg-brand/80"
                }`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/50">
                  {row.label}
                </p>
                <p className="mt-1 font-display text-xl font-bold text-ink sm:text-2xl">
                  {row.value != null ? formatNumber(row.value) : "—"}
                  <span className="ml-1 text-sm font-medium text-ink/45">
                    {row.unitSuffix ?? ` ${unit}`}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-brand-soft to-blush/80 p-4">
          <CircleDiagram
            radius={result?.radius ?? 0}
            diameter={result?.diameter ?? 0}
            circumference={result?.circumference ?? 0}
            unit={unit}
          />
          <p className="mt-3 max-w-xs text-center text-xs text-ink/55">
            Live preview scales to your inputs. Units: {UNIT_LABELS[unit]}.
          </p>
        </div>
      </div>
    </div>
  );
}

function CircleDiagram({
  radius,
  diameter,
  circumference,
  unit,
}: {
  radius: number;
  diameter: number;
  circumference: number;
  unit: string;
}) {
  const size = 260;
  const cx = size / 2;
  const cy = size / 2;
  const r = 88;
  const tipX = cx + r;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className="max-w-full"
      role="img"
      aria-label={
        radius > 0
          ? `Circle with radius ${formatNumber(radius)} ${unit}, diameter ${formatNumber(diameter)} ${unit}, circumference ${formatNumber(circumference)} ${unit}`
          : "Circle diagram waiting for a valid input"
      }
    >
      <defs>
        <linearGradient id="ringFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="arcStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <circle cx={cx} cy={cy} r={r} fill="url(#ringFill)" stroke="#0EA5E9" strokeWidth="4" />
      <path
        d={`M ${tipX} ${cy} A ${r} ${r} 0 1 1 ${cx} ${cy - r}`}
        fill="none"
        stroke="url(#arcStroke)"
        strokeWidth="6"
        strokeLinecap="round"
        className="origin-center"
        style={{ transformOrigin: `${cx}px ${cy}px` }}
      />
      <line x1={cx} y1={cy} x2={tipX} y2={cy} stroke="#0284C7" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="5" fill="#0F2236" />
      <circle cx={tipX} cy={cy} r="5" fill="#F59E0B" />
      <text x={cx + r / 2} y={cy - 10} textAnchor="middle" fill="#0369A1" fontSize="14" fontWeight="700">
        r
      </text>
      <text x={cx} y={cy + r + 28} textAnchor="middle" fill="#0F2236" fontSize="13" fontWeight="600">
        {radius > 0 ? `C ≈ ${formatNumber(circumference, 4)} ${unit}` : "C = 2πr"}
      </text>
      <text x={cx} y={28} textAnchor="middle" fill="#D97706" fontSize="22" fontWeight="800">
        π
      </text>
    </svg>
  );
}
