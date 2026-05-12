import { useState, useEffect, useRef } from "react";
import "@fontsource/ibm-plex-mono";
import "@fontsource/ibm-plex-sans";

const MOTION_TOKENS = {
  durationCalm: 0,
  durationSignal: 300,
  durationAlert: 180,
  easingSignal: "cubic-bezier(0.0, 0.0, 0.2, 1)",
  easingAlert:  "cubic-bezier(0.4, 0.0, 1.0, 1)",
} as const;

const COLOR_TOKENS = {
  "bg/primary":      "#16181d",
  "bg/secondary":    "#1e2028",
  "bg/surface":      "#252830",
  "border/default":  "#2e3139",
  "border/subtle":   "#374151",
  "text/primary":    "#e5e7eb",
  "text/secondary":  "#9ca3af",
  "text/muted":      "#6b7280",
  "signal/amber":    "#f59e0b",
  "signal/red":      "#ef4444",
  "signal/green":    "#34d399",
} as const;

type SignalState = "calm" | "signal" | "alert";

interface Matter {
  id: string;
  client: string;
  matter: string;
  billing: string;
  risk: "low" | "high";
  signals: string[];
  draft?: string;
}

const MATTERS: Matter[] = [
  { id: "m1", client: "Westbrook Capital", matter: "Series C Due Diligence", billing: "$284,000", risk: "low", signals: [] },
  { id: "m2", client: "Richardson & Apex", matter: "Contract Dispute — Phase II", billing: "$847,200", risk: "high",
    signals: ["Invoice aging 47 days", "No client response — 12 days", "Billing rate dispute flagged"],
    draft: "Dear Ms. Richardson, I wanted to follow up regarding the outstanding invoice dated March 14th. Our records indicate the balance of $847,200 remains unpaid. I'd welcome a call to discuss any concerns you may have before this matter requires escalation." },
  { id: "m3", client: "Meridian Holdings", matter: "Acquisition — NDA Review", billing: "$62,400", risk: "low", signals: [] },
];

function transition(duration: number, easing: string, properties = "all") {
  if (duration === 0) return "none";
  return `${properties} ${duration}ms ${easing}`;
}

function SignalDot({ active, state }: { active: boolean; state: SignalState }) {
  const dur = state === "calm" ? MOTION_TOKENS.durationCalm : state === "signal" ? MOTION_TOKENS.durationSignal : MOTION_TOKENS.durationAlert;
  const ease = state === "alert" ? MOTION_TOKENS.easingAlert : MOTION_TOKENS.easingSignal;
  return (
    <span style={{
      display: "inline-block", width: 8, height: 8, borderRadius: "50%",
      background: active ? state === "alert" ? COLOR_TOKENS["signal/red"] : COLOR_TOKENS["signal/amber"] : COLOR_TOKENS["border/subtle"],
      transition: transition(dur, ease, "background, transform, box-shadow"),
      transform: active && state === "alert" ? "scale(1.3)" : "scale(1)",
      boxShadow: active && state === "alert" ? "0 0 8px rgba(239,68,68,0.6)" : active && state === "signal" ? "0 0 6px rgba(245,158,11,0.4)" : "none",
      flexShrink: 0,
    }} />
  );
}

function MatterRow({ matter, state, isHighRisk }: { matter: Matter; state: SignalState; isHighRisk: boolean }) {
  const dur = state === "calm" ? MOTION_TOKENS.durationCalm : state === "signal" ? MOTION_TOKENS.durationSignal : MOTION_TOKENS.durationAlert;
  const ease = state === "alert" ? MOTION_TOKENS.easingAlert : MOTION_TOKENS.easingSignal;
  const trans = transition(dur, ease);
  const highlighted = isHighRisk && state !== "calm";
  const clientColor = highlighted ? state === "alert" ? "#fca5a5" : "#fcd34d" : COLOR_TOKENS["text/primary"];
  const billingColor = highlighted ? state === "alert" ? COLOR_TOKENS["signal/red"] : COLOR_TOKENS["signal/amber"] : COLOR_TOKENS["text/secondary"];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto auto", alignItems: "center", gap: 12, padding: "10px 16px",
      background: highlighted ? state === "alert" ? "rgba(239,68,68,0.06)" : "rgba(245,158,11,0.04)" : "transparent",
      borderLeft: `2px solid ${highlighted ? state === "alert" ? COLOR_TOKENS["signal/red"] : COLOR_TOKENS["signal/amber"] : "transparent"}`,
      transition: trans }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 500, color: clientColor, transition: trans, fontFamily: "'IBM Plex Mono', monospace", letterSpacing: "0.01em" }}>
          {matter.client}
        </div>
        <div style={{ fontSize: 11, color: COLOR_TOKENS["text/secondary"], marginTop: 2, fontFamily: "'IBM Plex Sans', sans-serif" }}>
          {matter.matter}
        </div>
      </div>
      <div style={{ fontSize: 12, fontWeight: 500, color: billingColor, fontFamily: "'IBM Plex Mono', monospace", transition: trans }}>
        {matter.billing}
      </div>
      <SignalDot active={isHighRisk} state={state} />
    </div>
  );
}

function SignalPanel({ matter, state }: { matter: Matter; state: SignalState }) {
  const visible = state !== "calm" && matter.risk === "high";
  const dur = state === "alert" ? MOTION_TOKENS.durationAlert : MOTION_TOKENS.durationSignal;
  const ease = state === "alert" ? MOTION_TOKENS.easingAlert : MOTION_TOKENS.easingSignal;
  return (
    <div style={{ overflow: "hidden", maxHeight: visible ? 400 : 0, opacity: visible ? 1 : 0,
      transition: visible ? transition(dur, ease, "max-height, opacity") : transition(MOTION_TOKENS.durationSignal, MOTION_TOKENS.easingSignal, "max-height, opacity") }}>
      <div style={{ margin: "0 16px 12px", padding: 12, background: "rgba(17,24,39,0.8)",
        border: `1px solid ${state === "alert" ? "rgba(239,68,68,0.3)" : "rgba(245,158,11,0.2)"}`,
        borderRadius: 6, transition: transition(dur, ease, "border-color") }}>
        <div style={{ marginBottom: 10 }}>
          <div style={{ fontSize: 11, letterSpacing: "0.08em", fontWeight: 700,
            color: state === "alert" ? COLOR_TOKENS["signal/red"] : COLOR_TOKENS["signal/amber"],
            marginBottom: 6, fontFamily: "'IBM Plex Mono', monospace" }}>
            {state === "alert" ? "THRESHOLD EXCEEDED" : "SIGNALS DETECTED"}
          </div>
          {matter.signals.map((signal, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11,
              color: COLOR_TOKENS["text/secondary"], marginBottom: 3, fontFamily: "'IBM Plex Sans', sans-serif" }}>
              <span style={{ color: state === "alert" ? COLOR_TOKENS["signal/red"] : COLOR_TOKENS["signal/amber"], fontSize: 8 }}>▸</span>
              {signal}
            </div>
          ))}
        </div>
        {state === "alert" && matter.draft && (
          <div>
            <div style={{ fontSize: 11, letterSpacing: "0.08em", fontWeight: 700,
              color: COLOR_TOKENS["text/secondary"], marginBottom: 6, fontFamily: "'IBM Plex Mono', monospace" }}>
              AI-DRAFTED COMMUNICATION
            </div>
            <div style={{ fontSize: 11, color: COLOR_TOKENS["text/secondary"], lineHeight: 1.6,
              fontFamily: "'IBM Plex Sans', sans-serif", borderLeft: `2px solid ${COLOR_TOKENS["border/subtle"]}`,
              paddingLeft: 8, fontStyle: "italic" }}>
              {matter.draft}
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
              <button style={{ padding: "5px 12px", fontSize: 11, fontWeight: 500, background: "transparent",
                border: `1px solid ${COLOR_TOKENS["border/subtle"]}`, color: COLOR_TOKENS["text/secondary"],
                borderRadius: 4, cursor: "pointer", fontFamily: "'IBM Plex Mono', monospace" }}>
                Dismiss
              </button>
              <button style={{ padding: "5px 12px", fontSize: 11, fontWeight: 600, background: "#1d4ed8",
                border: "1px solid #2563eb", color: "#ffffff", borderRadius: 4, cursor: "pointer",
                fontFamily: "'IBM Plex Mono', monospace" }}>
                Prepare Communication →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TokenAnnotation({ state }: { state: SignalState }) {
  const token = state === "calm"
    ? { name: "--duration-calm", value: "0ms", note: "Stillness is the default. Motion in a calm state creates noise.", color: COLOR_TOKENS["text/secondary"] }
    : state === "signal"
    ? { name: "--duration-signal", value: "300ms ease-out", note: "Decelerates into attention. Deliberate, not reactive.", color: COLOR_TOKENS["signal/amber"] }
    : { name: "--duration-alert", value: "180ms ease-in", note: "Accelerates — speed communicates urgency.", color: COLOR_TOKENS["signal/red"] };
  return (
    <div style={{ padding: "10px 14px", background: "rgba(17,24,39,0.6)",
      border: `1px solid ${COLOR_TOKENS["border/default"]}`, borderRadius: 6, fontFamily: "'IBM Plex Mono', monospace" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
        <span style={{ fontSize: 11, color: token.color, fontWeight: 700 }}>{token.name}</span>
        <span style={{ fontSize: 11, color: COLOR_TOKENS["text/secondary"] }}>: {token.value}</span>
      </div>
      <div style={{ fontSize: 11, color: COLOR_TOKENS["text/secondary"], lineHeight: 1.5, fontFamily: "'IBM Plex Sans', sans-serif" }}>
        {token.note}
      </div>
    </div>
  );
}

function StateButton({ label, active, state, onClick }: { label: string; active: boolean; state: SignalState; onClick: () => void }) {
  const color = state === "calm" ? COLOR_TOKENS["border/subtle"] : state === "signal" ? COLOR_TOKENS["signal/amber"] : COLOR_TOKENS["signal/red"];
  return (
    <button onClick={onClick} style={{ padding: "6px 14px", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
      background: active ? color : "transparent", border: `1px solid ${active ? color : COLOR_TOKENS["border/default"]}`,
      color: active ? "#fff" : COLOR_TOKENS["text/secondary"], borderRadius: 4, cursor: "pointer",
      transition: "all 200ms ease", fontFamily: "'IBM Plex Mono', monospace" }}>
      {label}
    </button>
  );
}

export default function BillingSignalState() {
  const [state, setState] = useState<SignalState>("calm");
  const [autoPlay, setAutoPlay] = useState(false);
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!autoPlay) return;
    const sequence: SignalState[] = ["calm", "signal", "alert", "calm"];
    let i = 0;
    const step = () => {
      i = (i + 1) % sequence.length;
      setState(sequence[i]);
      autoRef.current = setTimeout(step, i === 0 ? 1800 : i === 2 ? 2400 : 2000);
    };
    autoRef.current = setTimeout(step, 800);
    return () => { if (autoRef.current) clearTimeout(autoRef.current); };
  }, [autoPlay]);

  const dur = state === "calm" ? MOTION_TOKENS.durationCalm : state === "signal" ? MOTION_TOKENS.durationSignal : MOTION_TOKENS.durationAlert;
  const ease = state === "alert" ? MOTION_TOKENS.easingAlert : MOTION_TOKENS.easingSignal;
  const dashBg = state === "calm" ? "rgba(17,24,39,0.95)" : state === "signal" ? "rgba(24,20,0,0.97)" : "rgba(28,8,8,0.97)";
  const dashBorder = state === "calm" ? COLOR_TOKENS["border/default"] : state === "signal" ? "rgba(245,158,11,0.15)" : "rgba(239,68,68,0.25)";

  return (
    <div style={{ minHeight: "100vh", background: COLOR_TOKENS["bg/primary"], display: "flex",
      flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 24px",
      fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&display=swap'); *{box-sizing:border-box;margin:0;padding:0;} button:focus{outline:2px solid #3b82f6;outline-offset:2px;}`}</style>

      <div style={{ marginBottom: 32, textAlign: "center" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.12em", color: COLOR_TOKENS["text/secondary"], fontWeight: 700, fontFamily: "'IBM Plex Mono', monospace", marginBottom: 8 }}>
          BILLING INTELLIGENCE — MOTION SYSTEM
        </div>
        <div style={{ fontSize: 13, color: COLOR_TOKENS["text/secondary"], lineHeight: 1.6, maxWidth: 480 }}>
          State transitions governed by motion tokens. Duration and easing communicate urgency level.
        </div>
      </div>

      <div style={{ width: "100%", maxWidth: 520, background: dashBg, border: `1px solid ${dashBorder}`,
        borderRadius: 10, overflow: "hidden", transition: transition(dur, ease, "background, border-color"),
        boxShadow: state === "alert" ? "0 0 40px rgba(239,68,68,0.08)" : state === "signal" ? "0 0 30px rgba(245,158,11,0.05)" : "none" }}>
        <div style={{ padding: "14px 16px",
          borderBottom: `1px solid ${state === "alert" ? "rgba(239,68,68,0.2)" : COLOR_TOKENS["border/default"]}`,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: transition(dur, ease, "border-color") }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
              color: state === "calm" ? COLOR_TOKENS["text/primary"] : state === "signal" ? "#fcd34d" : "#fca5a5",
              fontFamily: "'IBM Plex Mono', monospace", transition: transition(dur, ease, "color") }}>
              CLIENT HEALTH
            </div>
            <div style={{ fontSize: 11, color: COLOR_TOKENS["text/secondary"], marginTop: 1, fontFamily: "'IBM Plex Mono', monospace" }}>
              {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </div>
          </div>
          <div style={{ fontSize: 11, letterSpacing: "0.08em", fontWeight: 700,
            color: state === "alert" ? COLOR_TOKENS["signal/red"] : state === "signal" ? COLOR_TOKENS["signal/amber"] : COLOR_TOKENS["text/secondary"],
            fontFamily: "'IBM Plex Mono', monospace", transition: transition(dur, ease, "color") }}>
            {state === "calm" ? "ALL CLEAR" : state === "signal" ? "MONITORING" : "THRESHOLD EXCEEDED"}
          </div>
        </div>
        <div style={{ paddingTop: 4, paddingBottom: 4 }}>
          {MATTERS.map(matter => (
            <div key={matter.id}>
              <MatterRow matter={matter} state={state} isHighRisk={matter.risk === "high"} />
              {matter.risk === "high" && <SignalPanel matter={matter} state={state} />}
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: "100%", maxWidth: 520, marginTop: 12 }}>
        <TokenAnnotation state={state} />
      </div>

      <div style={{ marginTop: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
        <div style={{ display: "flex", gap: 8 }}>
          <StateButton label="CALM" active={state === "calm"} state="calm" onClick={() => { setAutoPlay(false); setState("calm"); }} />
          <StateButton label="SIGNAL" active={state === "signal"} state="signal" onClick={() => { setAutoPlay(false); setState("signal"); }} />
          <StateButton label="ALERT" active={state === "alert"} state="alert" onClick={() => { setAutoPlay(false); setState("alert"); }} />
        </div>
        <button onClick={() => setAutoPlay(!autoPlay)} style={{ fontSize: 11, letterSpacing: "0.08em", fontWeight: 700,
          background: "transparent", border: `1px solid ${COLOR_TOKENS["border/default"]}`,
          color: autoPlay ? COLOR_TOKENS["text/primary"] : COLOR_TOKENS["text/secondary"],
          padding: "5px 14px", borderRadius: 4, cursor: "pointer", fontFamily: "'IBM Plex Mono', monospace" }}>
          {autoPlay ? "STOP" : "AUTOPLAY SEQUENCE"}
        </button>
      </div>

      <div style={{ marginTop: 40, width: "100%", maxWidth: 520 }}>
        <div style={{ fontSize: 11, letterSpacing: "0.1em", color: COLOR_TOKENS["text/secondary"], fontWeight: 700,
          fontFamily: "'IBM Plex Mono', monospace", marginBottom: 12 }}>
          MOTION TOKEN REFERENCE
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[
            { token: "--duration-calm",   value: "0ms",   sub: "No transition", color: COLOR_TOKENS["text/secondary"] },
            { token: "--duration-signal", value: "300ms", sub: "ease-out",       color: COLOR_TOKENS["signal/amber"] },
            { token: "--duration-alert",  value: "180ms", sub: "ease-in",        color: COLOR_TOKENS["signal/red"] },
          ].map(t => (
            <div key={t.token} style={{ padding: "8px 10px", background: COLOR_TOKENS["bg/secondary"],
              border: `1px solid ${COLOR_TOKENS["border/default"]}`, borderRadius: 4 }}>
              <div style={{ fontSize: 11, color: t.color, fontFamily: "'IBM Plex Mono', monospace", marginBottom: 3, fontWeight: 700 }}>{t.token}</div>
              <div style={{ fontSize: 12, color: COLOR_TOKENS["text/primary"], fontFamily: "'IBM Plex Mono', monospace", fontWeight: 600 }}>{t.value}</div>
              <div style={{ fontSize: 11, color: COLOR_TOKENS["text/secondary"], marginTop: 2, fontFamily: "'IBM Plex Sans', sans-serif" }}>{t.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
