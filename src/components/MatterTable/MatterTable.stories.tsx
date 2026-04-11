import type { Meta, StoryObj } from "@storybook/react";
import { MatterTable, SAMPLE_MATTERS, MERIDIAN_TOKENS } from "./MatterTable";

const meta: Meta<typeof MatterTable> = {
  title: "Meridian Advisory / MatterTable",
  component: MatterTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    backgrounds: { default: "meridian-dark" },
    docs: {
      description: {
        component: `
## MatterTable

The primary data surface in the Meridian Advisory intranet platform. Replaced a Balsamiq-based wireframing process with a single Figma component toggled between three fidelity levels during live client sessions.

### The toggle architecture

One component. One Figma frame. Three fidelity levels controlled by a single \`fidelity\` prop. This is not three separate components — that approach created drift. A single component with a fidelity axis keeps all three states in sync automatically.

### Governance model

Fidelity is a conversation signal, not a quality signal.

| Level | Use when | What clients respond with |
|-------|----------|--------------------------|
| Lo | Early discovery — structure only | Is this layout right? |
| Mid | Architecture review | Is this the right information? |
| Hi | Dev handoff or sign-off | Specific interaction feedback |

Presenting Hi fidelity too early shifts client attention to visual details before structural decisions are made.

### Design decisions

**Why a single \`fidelity\` prop rather than individual boolean flags?**
Boolean flags create 2³ = 8 combinatorial states. The \`fidelity\` prop enforces three well-defined states that map to real workflow moments.

**Why are status pills withheld from Lo?**
The status indicator affects how a row is read — including it in Lo invites feedback on colors and labels before information architecture is validated.

**Why does Hi fold Practice into the client cell?**
At Hi fidelity the table gains Budget and Actions columns. A sixth column would exceed the 1280px target viewport. Practice is demoted to secondary text — a layout constraint documented in the component, not a separate design decision made at implementation time.
        `,
      },
    },
  },
  argTypes: {
    fidelity: {
      control: { type: "radio" },
      options: ["lo", "mid", "hi"],
      description: "Controls information density. Maps to a specific stage in the client engagement workflow.",
      table: {
        defaultValue: { summary: "mid" },
        type: { summary: '"lo" | "mid" | "hi"' },
      },
    },
    showHeaders: {
      control: "boolean",
      description: "Show or hide the column header row.",
    },
    maxRows: {
      control: { type: "range", min: 1, max: 10, step: 1 },
      description: "Maximum number of rows to display.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof MatterTable>;

/**
 * **Lo fidelity — skeleton state.**
 *
 * Gray placeholders replace all content including column headers.
 * Clients focus on layout and structure only.
 *
 * Use in early discovery workshops before the information architecture
 * is validated. Showing real data at this stage invites premature feedback
 * on content rather than structure.
 *
 * **Governance note:** This is not a loading state — it is a deliberate
 * communication tool. Content is withheld by design.
 */
export const Lo: Story = {
  args: { fidelity: "lo", showHeaders: true, maxRows: 5 },
};

/**
 * **Mid fidelity — structured state.**
 *
 * Real client names, matter descriptions, practice areas, and status indicators.
 * Budget bars and action buttons not yet shown.
 *
 * Use when reviewing information architecture with a stakeholder. Status pills
 * introduce color at this stage — but only for status. Budget health and aging
 * colors are deferred to Hi fidelity so data visualization patterns can be
 * evaluated together.
 *
 * **Governance note:** This is the most commonly used fidelity level in
 * production client engagements.
 */
export const Mid: Story = {
  args: { fidelity: "mid", matters: SAMPLE_MATTERS, showHeaders: true, maxRows: 5 },
};

/**
 * **Hi fidelity — full feature state.**
 *
 * Budget utilization bars, invoice aging indicators, and action buttons.
 * This is the complete product — what engineering builds from.
 *
 * The budget bar changes color at 70% (amber) and 90% (red). These thresholds
 * are token values, not hardcoded, and can be adjusted per-client.
 *
 * **Governance note:** Invoice aging is only shown when > 0 days. Displaying
 * "0 days" for clean matters would create noise and train users to ignore the
 * field — threshold-based display is intentional.
 */
export const Hi: Story = {
  args: { fidelity: "hi", matters: SAMPLE_MATTERS, showHeaders: true, maxRows: 5 },
};

/**
 * **Fidelity comparison — all three states.**
 *
 * Same matters at all three fidelity levels. Use to orient new team members
 * on the toggle architecture or present the system to stakeholders.
 */
export const FidelityComparison: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, fontFamily: "'Inter', sans-serif" }}>
      {(["lo", "mid", "hi"] as const).map((level) => (
        <div key={level}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <span style={{
              fontSize: 10, fontWeight: 600, letterSpacing: "0.1em",
              color: MERIDIAN_TOKENS["color/accent/amber"],
              textTransform: "uppercase", padding: "2px 8px",
              background: `${MERIDIAN_TOKENS["color/accent/amber"]}18`,
              border: `1px solid ${MERIDIAN_TOKENS["color/accent/amber"]}40`,
              borderRadius: MERIDIAN_TOKENS["radius/sm"],
            }}>
              {level.toUpperCase()}
            </span>
            <span style={{ fontSize: 11, color: MERIDIAN_TOKENS["color/text/secondary"] }}>
              {level === "lo" && "Early discovery — structure only"}
              {level === "mid" && "Architecture review — real data, no data viz"}
              {level === "hi" && "Dev handoff — full feature set"}
            </span>
          </div>
          <MatterTable fidelity={level} matters={SAMPLE_MATTERS} maxRows={3} />
        </div>
      ))}
    </div>
  ),
};

/**
 * **At-risk matters — high budget utilization.**
 *
 * Matters above 70% budget utilization. Demonstrates threshold-based
 * data visualization — budget bar color changes automatically based on
 * token-defined thresholds, not hardcoded conditionals.
 */
export const AtRiskMatters: Story = {
  args: {
    fidelity: "hi",
    matters: SAMPLE_MATTERS.filter(m => (m.budgetUsed ?? 0) >= 70),
    showHeaders: true,
    maxRows: 5,
  },
};

/**
 * **Single matter — embedded display.**
 *
 * One row without headers. Use when embedding a matter summary within a
 * larger layout — for example, inside a client health dashboard card
 * alongside billing signals and communication history.
 */
export const SingleMatter: Story = {
  args: {
    fidelity: "hi",
    matters: [SAMPLE_MATTERS[1]],
    showHeaders: false,
    maxRows: 1,
  },
};
