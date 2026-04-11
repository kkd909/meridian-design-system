import type { CSSProperties } from "react";

export const MERIDIAN_TOKENS = {
  "color/bg/primary":      "#16181d",
  "color/bg/secondary":    "#1e2028",
  "color/bg/tertiary":     "#252830",
  "color/border/default":  "#2e3139",
  "color/text/primary":    "#e5e7eb",
  "color/text/secondary":  "#9ca3af",
  "color/text/muted":      "#6b7280",
  "color/accent/amber":    "#f59e0b",
  "color/status/active":   "#34d399",
  "color/status/pending":  "#f59e0b",
  "color/status/review":   "#60a5fa",
  "color/status/closed":   "#6b7280",
  "spacing/xs":  "4px",
  "spacing/sm":  "8px",
  "spacing/md":  "12px",
  "spacing/lg":  "16px",
  "font/size/xs":   "10px",
  "font/size/sm":   "11px",
  "font/size/base": "12px",
  "font/weight/normal": 400,
  "font/weight/medium": 500,
  "font/weight/bold":   600,
  "radius/sm":  "3px",
  "radius/md":  "6px",
  "radius/lg":  "8px",
} as const;

export type Fidelity = "lo" | "mid" | "hi";
export type MatterStatus = "active" | "pending" | "review" | "closed";

export interface Matter {
  id: string;
  client: string;
  matterName: string;
  practice: string;
  status: MatterStatus;
  openDate: string;
  billedHours: number;
  invoiceAging?: number;
  budgetUsed?: number;
}

export interface MatterTableProps {
  /**
   * Controls information density and visual completeness.
   *
   * - **lo** — Skeleton state. Gray placeholders.
   *   Use during early client workshops when structure matters, not content.
   *
   * - **mid** — Structured state. Real matter names, status indicators.
   *   Use when reviewing information architecture with a stakeholder.
   *
   * - **hi** — Full feature state. Budget bars, aging indicators, actions.
   *   Use for dev handoff or executive sign-off.
   */
  fidelity?: Fidelity;
  matters?: Matter[];
  showHeaders?: boolean;
  maxRows?: number;
}

export const SAMPLE_MATTERS: Matter[] = [
  { id: "m1", client: "Westbrook Capital Partners", matterName: "Series C Due Diligence", practice: "Corporate", status: "active", openDate: "Mar 12, 2026", billedHours: 84, invoiceAging: 0, budgetUsed: 62 },
  { id: "m2", client: "Richardson & Apex Holdings", matterName: "Contract Dispute — Phase II", practice: "Litigation", status: "review", openDate: "Jan 8, 2026", billedHours: 312, invoiceAging: 47, budgetUsed: 91 },
  { id: "m3", client: "Meridian Holdings LLC", matterName: "Acquisition — NDA Review", practice: "M&A", status: "active", openDate: "Apr 1, 2026", billedHours: 22, invoiceAging: 0, budgetUsed: 18 },
  { id: "m4", client: "Starfield Ventures", matterName: "IP Portfolio Transfer", practice: "Intellectual Property", status: "pending", openDate: "Feb 20, 2026", billedHours: 56, invoiceAging: 14, budgetUsed: 44 },
  { id: "m5", client: "Arclight Development", matterName: "Zoning Variance Appeal", practice: "Real Estate", status: "closed", openDate: "Nov 3, 2025", billedHours: 148, invoiceAging: 0, budgetUsed: 100 },
];

function statusColor(status: MatterStatus): string {
  return { active: MERIDIAN_TOKENS["color/status/active"], pending: MERIDIAN_TOKENS["color/status/pending"], review: MERIDIAN_TOKENS["color/status/review"], closed: MERIDIAN_TOKENS["color/status/closed"] }[status];
}

function statusLabel(status: MatterStatus): string {
  return { active: "Active", pending: "Pending", review: "In Review", closed: "Closed" }[status];
}

function Skeleton({ w, h = 12, style }: { w: number | string; h?: number; style?: CSSProperties }) {
  return <div style={{ width: w, height: h, background: MERIDIAN_TOKENS["color/bg/tertiary"], borderRadius: MERIDIAN_TOKENS["radius/sm"], ...style }} />;
}

function StatusPill({ status }: { status: MatterStatus }) {
  const color = statusColor(status);
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "2px 8px",
      background: `${color}18`, border: `1px solid ${color}40`,
      borderRadius: MERIDIAN_TOKENS["radius/sm"], fontSize: MERIDIAN_TOKENS["font/size/xs"],
      fontWeight: MERIDIAN_TOKENS["font/weight/medium"], color, whiteSpace: "nowrap" }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: color, flexShrink: 0 }} />
      {statusLabel(status)}
    </span>
  );
}

function BudgetBar({ pct, aging }: { pct: number; aging: number }) {
  const color = pct >= 90 ? "#ef4444" : pct >= 70 ? "#f59e0b" : "#34d399";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 3, minWidth: 80 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontSize: "11px", color: MERIDIAN_TOKENS["color/text/secondary"] }}>Budget</span>
        <span style={{ fontSize: "11px", color: pct >= 90 ? "#ef4444" : MERIDIAN_TOKENS["color/text/secondary"], fontWeight: pct >= 90 ? 600 : 400 }}>{pct}%</span>
      </div>
      <div style={{ height: 3, background: MERIDIAN_TOKENS["color/bg/tertiary"], borderRadius: 2, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: 2 }} />
      </div>
      {aging > 0 && (
        <span style={{ fontSize: "11px", color: aging > 30 ? "#ef4444" : MERIDIAN_TOKENS["color/text/secondary"] }}>
          {aging}d aging
        </span>
      )}
    </div>
  );
}

function ActionButtons() {
  const base: CSSProperties = { padding: "3px 8px", fontSize: "11px", fontWeight: 500,
    background: "transparent", border: `1px solid ${MERIDIAN_TOKENS["color/border/default"]}`,
    borderRadius: MERIDIAN_TOKENS["radius/sm"], color: MERIDIAN_TOKENS["color/text/secondary"],
    cursor: "pointer", whiteSpace: "nowrap" };
  return (
    <div style={{ display: "flex", gap: 4 }}>
      <button style={base}>View</button>
      <button style={{ ...base, color: MERIDIAN_TOKENS["color/accent/amber"], borderColor: `${MERIDIAN_TOKENS["color/accent/amber"]}40` }}>Flag</button>
    </div>
  );
}

function LoRow() {
  return (
    <tr style={{ borderBottom: `1px solid ${MERIDIAN_TOKENS["color/border/default"]}` }}>
      <td style={{ padding: "10px 12px" }}><div style={{ display: "flex", flexDirection: "column", gap: 5 }}><Skeleton w={140} /><Skeleton w={100} h={10} /></div></td>
      <td style={{ padding: "10px 12px" }}><Skeleton w={60} /></td>
      <td style={{ padding: "10px 12px" }}><Skeleton w={50} /></td>
      <td style={{ padding: "10px 12px" }}><Skeleton w={36} /></td>
    </tr>
  );
}

function MidRow({ matter }: { matter: Matter }) {
  return (
    <tr style={{ borderBottom: `1px solid ${MERIDIAN_TOKENS["color/border/default"]}` }}>
      <td style={{ padding: "10px 12px" }}>
        <div style={{ fontSize: MERIDIAN_TOKENS["font/size/sm"], fontWeight: MERIDIAN_TOKENS["font/weight/medium"], color: MERIDIAN_TOKENS["color/text/primary"], marginBottom: 2 }}>{matter.client}</div>
        <div style={{ fontSize: MERIDIAN_TOKENS["font/size/sm"], color: MERIDIAN_TOKENS["color/text/secondary"] }}>{matter.matterName}</div>
      </td>
      <td style={{ padding: "10px 12px" }}><StatusPill status={matter.status} /></td>
      <td style={{ padding: "10px 12px", fontSize: MERIDIAN_TOKENS["font/size/sm"], color: MERIDIAN_TOKENS["color/text/secondary"] }}>{matter.practice}</td>
      <td style={{ padding: "10px 12px", fontSize: MERIDIAN_TOKENS["font/size/sm"], color: MERIDIAN_TOKENS["color/text/secondary"], textAlign: "right" }}>{matter.billedHours}h</td>
    </tr>
  );
}

function HiRow({ matter }: { matter: Matter }) {
  return (
    <tr style={{ borderBottom: `1px solid ${MERIDIAN_TOKENS["color/border/default"]}` }}>
      <td style={{ padding: "10px 12px" }}>
        <div style={{ fontSize: MERIDIAN_TOKENS["font/size/sm"], fontWeight: MERIDIAN_TOKENS["font/weight/medium"], color: MERIDIAN_TOKENS["color/text/primary"], marginBottom: 2 }}>{matter.client}</div>
        <div style={{ fontSize: MERIDIAN_TOKENS["font/size/sm"], color: MERIDIAN_TOKENS["color/text/secondary"] }}>{matter.matterName} · {matter.practice}</div>
      </td>
      <td style={{ padding: "10px 12px" }}><StatusPill status={matter.status} /></td>
      <td style={{ padding: "10px 12px", fontSize: MERIDIAN_TOKENS["font/size/sm"], color: MERIDIAN_TOKENS["color/text/secondary"] }}>{matter.openDate}</td>
      <td style={{ padding: "10px 12px", fontSize: MERIDIAN_TOKENS["font/size/sm"], color: MERIDIAN_TOKENS["color/text/secondary"], textAlign: "right" }}>{matter.billedHours}h</td>
      <td style={{ padding: "10px 12px" }}>{matter.budgetUsed !== undefined && <BudgetBar pct={matter.budgetUsed} aging={matter.invoiceAging ?? 0} />}</td>
      <td style={{ padding: "10px 12px" }}><ActionButtons /></td>
    </tr>
  );
}

const HEADERS: Record<Fidelity, string[]> = {
  lo:  ["Client / Matter", "Status", "Practice", "Hours"],
  mid: ["Client / Matter", "Status", "Practice", "Hours"],
  hi:  ["Client / Matter", "Status", "Opened", "Hours", "Budget", ""],
};

export function MatterTable({ fidelity = "mid", matters = SAMPLE_MATTERS, showHeaders = true, maxRows = 5 }: MatterTableProps) {
  const rows = matters.slice(0, maxRows);
  return (
    <div style={{ background: MERIDIAN_TOKENS["color/bg/secondary"], border: `1px solid ${MERIDIAN_TOKENS["color/border/default"]}`,
      borderRadius: MERIDIAN_TOKENS["radius/lg"], overflow: "hidden", fontFamily: "'Inter', -apple-system, sans-serif" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        {showHeaders && (
          <thead>
            <tr style={{ borderBottom: `1px solid ${MERIDIAN_TOKENS["color/border/default"]}` }}>
              {HEADERS[fidelity].map((h, i) => (
                <th key={i} style={{ padding: "8px 12px", textAlign: "left", fontSize: MERIDIAN_TOKENS["font/size/xs"],
                  fontWeight: MERIDIAN_TOKENS["font/weight/medium"], color: MERIDIAN_TOKENS["color/text/secondary"],
                  letterSpacing: "0.06em", textTransform: "uppercase", background: MERIDIAN_TOKENS["color/bg/tertiary"], whiteSpace: "nowrap" }}>
                  {fidelity === "lo" ? <Skeleton w={h.length * 5.5} h={10} /> : h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {fidelity === "lo"
            ? Array.from({ length: Math.min(maxRows, 5) }).map((_, i) => <LoRow key={i} />)
            : fidelity === "mid"
            ? rows.map(m => <MidRow key={m.id} matter={m} />)
            : rows.map(m => <HiRow key={m.id} matter={m} />)
          }
        </tbody>
      </table>
    </div>
  );
}

export default MatterTable;