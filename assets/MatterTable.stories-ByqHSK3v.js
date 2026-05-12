import{t as e}from"./jsx-runtime-CGsOPcPf.js";var t=e(),n={"color/bg/primary":`#16181d`,"color/bg/secondary":`#1e2028`,"color/bg/tertiary":`#252830`,"color/border/default":`#2e3139`,"color/text/primary":`#e5e7eb`,"color/text/secondary":`#9ca3af`,"color/text/muted":`#6b7280`,"color/accent/amber":`#f59e0b`,"color/status/active":`#34d399`,"color/status/pending":`#f59e0b`,"color/status/review":`#60a5fa`,"color/status/closed":`#6b7280`,"font/size/xs":`10px`,"font/size/sm":`11px`,"font/weight/medium":500,"font/weight/bold":600,"radius/sm":`3px`,"radius/md":`6px`,"radius/lg":`8px`},r=[{id:`m1`,client:`Westbrook Capital Partners`,matterName:`Series C Due Diligence`,practice:`Corporate`,status:`active`,openDate:`Mar 12, 2026`,billedHours:84,invoiceAging:0,budgetUsed:62},{id:`m2`,client:`Richardson & Apex Holdings`,matterName:`Contract Dispute — Phase II`,practice:`Litigation`,status:`review`,openDate:`Jan 8, 2026`,billedHours:312,invoiceAging:47,budgetUsed:91},{id:`m3`,client:`Meridian Holdings LLC`,matterName:`Acquisition — NDA Review`,practice:`M&A`,status:`active`,openDate:`Apr 1, 2026`,billedHours:22,invoiceAging:0,budgetUsed:18},{id:`m4`,client:`Starfield Ventures`,matterName:`IP Portfolio Transfer`,practice:`Intellectual Property`,status:`pending`,openDate:`Feb 20, 2026`,billedHours:56,invoiceAging:14,budgetUsed:44},{id:`m5`,client:`Arclight Development`,matterName:`Zoning Variance Appeal`,practice:`Real Estate`,status:`closed`,openDate:`Nov 3, 2025`,billedHours:148,invoiceAging:0,budgetUsed:100}];function i(e){return{active:`#34d399`,pending:`#f59e0b`,review:`#60a5fa`,closed:`#6b7280`}[e]}function a(e){return{active:`Active`,pending:`Pending`,review:`In Review`,closed:`Closed`}[e]}function o({w:e,h:n=12}){return(0,t.jsx)(`div`,{style:{width:e,height:n,background:`#252830`,borderRadius:`3px`}})}function s({status:e}){let n=i(e);return(0,t.jsxs)(`span`,{style:{display:`inline-flex`,alignItems:`center`,gap:5,padding:`2px 8px`,background:`${n}18`,border:`1px solid ${n}40`,borderRadius:`3px`,fontSize:`10px`,fontWeight:500,color:n,whiteSpace:`nowrap`},children:[(0,t.jsx)(`span`,{style:{width:5,height:5,borderRadius:`50%`,background:n}}),a(e)]})}function c({pct:e,aging:n}){let r=e>=90?`#ef4444`:e>=70?`#f59e0b`:`#34d399`;return(0,t.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:3,minWidth:80},children:[(0,t.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`},children:[(0,t.jsx)(`span`,{style:{fontSize:`11px`,color:`#9ca3af`},children:`Budget`}),(0,t.jsxs)(`span`,{style:{fontSize:`11px`,color:e>=90?`#ef4444`:`#9ca3af`,fontWeight:e>=90?600:400},children:[e,`%`]})]}),(0,t.jsx)(`div`,{style:{height:3,background:`#252830`,borderRadius:2,overflow:`hidden`},children:(0,t.jsx)(`div`,{style:{height:`100%`,width:`${e}%`,background:r,borderRadius:2}})}),n>0&&(0,t.jsxs)(`span`,{style:{fontSize:`11px`,color:n>30?`#ef4444`:`#9ca3af`},children:[n,`d aging`]})]})}function l(){let e={padding:`3px 8px`,fontSize:`11px`,fontWeight:500,background:`transparent`,border:`1px solid #2e3139`,borderRadius:`3px`,color:`#9ca3af`,cursor:`pointer`,whiteSpace:`nowrap`};return(0,t.jsxs)(`div`,{style:{display:`flex`,gap:4},children:[(0,t.jsx)(`button`,{style:e,children:`View`}),(0,t.jsx)(`button`,{style:{...e,color:`#f59e0b`,borderColor:`#f59e0b40`},children:`Flag`})]})}function u(){return(0,t.jsxs)(`tr`,{style:{borderBottom:`1px solid #2e3139`},children:[(0,t.jsx)(`td`,{style:{padding:`10px 12px`},children:(0,t.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:5},children:[(0,t.jsx)(o,{w:140}),(0,t.jsx)(o,{w:100,h:10})]})}),(0,t.jsx)(`td`,{style:{padding:`10px 12px`},children:(0,t.jsx)(o,{w:60})}),(0,t.jsx)(`td`,{style:{padding:`10px 12px`},children:(0,t.jsx)(o,{w:50})}),(0,t.jsx)(`td`,{style:{padding:`10px 12px`},children:(0,t.jsx)(o,{w:36})})]})}function d({matter:e}){return(0,t.jsxs)(`tr`,{style:{borderBottom:`1px solid #2e3139`},children:[(0,t.jsxs)(`td`,{style:{padding:`10px 12px`},children:[(0,t.jsx)(`div`,{style:{fontSize:`11px`,fontWeight:500,color:`#e5e7eb`,marginBottom:2},children:e.client}),(0,t.jsx)(`div`,{style:{fontSize:`11px`,color:`#9ca3af`},children:e.matterName})]}),(0,t.jsx)(`td`,{style:{padding:`10px 12px`},children:(0,t.jsx)(s,{status:e.status})}),(0,t.jsx)(`td`,{style:{padding:`10px 12px`,fontSize:`11px`,color:`#9ca3af`},children:e.practice}),(0,t.jsxs)(`td`,{style:{padding:`10px 12px`,fontSize:`11px`,color:`#9ca3af`,textAlign:`right`},children:[e.billedHours,`h`]})]})}function f({matter:e}){return(0,t.jsxs)(`tr`,{style:{borderBottom:`1px solid #2e3139`},children:[(0,t.jsxs)(`td`,{style:{padding:`10px 12px`},children:[(0,t.jsx)(`div`,{style:{fontSize:`11px`,fontWeight:500,color:`#e5e7eb`,marginBottom:2},children:e.client}),(0,t.jsxs)(`div`,{style:{fontSize:`11px`,color:`#9ca3af`},children:[e.matterName,` · `,e.practice]})]}),(0,t.jsx)(`td`,{style:{padding:`10px 12px`},children:(0,t.jsx)(s,{status:e.status})}),(0,t.jsx)(`td`,{style:{padding:`10px 12px`,fontSize:`11px`,color:`#9ca3af`},children:e.openDate}),(0,t.jsxs)(`td`,{style:{padding:`10px 12px`,fontSize:`11px`,color:`#9ca3af`,textAlign:`right`},children:[e.billedHours,`h`]}),(0,t.jsx)(`td`,{style:{padding:`10px 12px`},children:e.budgetUsed!==void 0&&(0,t.jsx)(c,{pct:e.budgetUsed,aging:e.invoiceAging??0})}),(0,t.jsx)(`td`,{style:{padding:`10px 12px`},children:(0,t.jsx)(l,{})})]})}var p={lo:[`Client / Matter`,`Status`,`Practice`,`Hours`],mid:[`Client / Matter`,`Status`,`Practice`,`Hours`],hi:[`Client / Matter`,`Status`,`Opened`,`Hours`,`Budget`,``]};function m({fidelity:e=`mid`,matters:n=r,showHeaders:i=!0,maxRows:a=5}){let s=n.slice(0,a);return(0,t.jsx)(`div`,{style:{background:`#1e2028`,border:`1px solid #2e3139`,borderRadius:`8px`,overflow:`hidden`,fontFamily:`'Inter', -apple-system, sans-serif`},children:(0,t.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`},children:[i&&(0,t.jsx)(`thead`,{children:(0,t.jsx)(`tr`,{style:{borderBottom:`1px solid #2e3139`},children:p[e].map((n,r)=>(0,t.jsx)(`th`,{style:{padding:`8px 12px`,textAlign:`left`,fontSize:`10px`,fontWeight:500,color:`#9ca3af`,letterSpacing:`0.06em`,textTransform:`uppercase`,background:`#252830`,whiteSpace:`nowrap`},children:e===`lo`?(0,t.jsx)(o,{w:n.length*5.5,h:10}):n},r))})}),(0,t.jsx)(`tbody`,{children:e===`lo`?Array.from({length:Math.min(a,5)}).map((e,n)=>(0,t.jsx)(u,{},n)):e===`mid`?s.map(e=>(0,t.jsx)(d,{matter:e},e.id)):s.map(e=>(0,t.jsx)(f,{matter:e},e.id))})]})})}m.__docgenInfo={description:``,methods:[],displayName:`MatterTable`,props:{fidelity:{required:!1,tsType:{name:`union`,raw:`"lo" | "mid" | "hi"`,elements:[{name:`literal`,value:`"lo"`},{name:`literal`,value:`"mid"`},{name:`literal`,value:`"hi"`}]},description:``,defaultValue:{value:`"mid"`,computed:!1}},matters:{required:!1,tsType:{name:`Array`,elements:[{name:`Matter`}],raw:`Matter[]`},description:``,defaultValue:{value:`[
  { id: "m1", client: "Westbrook Capital Partners", matterName: "Series C Due Diligence", practice: "Corporate", status: "active", openDate: "Mar 12, 2026", billedHours: 84, invoiceAging: 0, budgetUsed: 62 },
  { id: "m2", client: "Richardson & Apex Holdings", matterName: "Contract Dispute — Phase II", practice: "Litigation", status: "review", openDate: "Jan 8, 2026", billedHours: 312, invoiceAging: 47, budgetUsed: 91 },
  { id: "m3", client: "Meridian Holdings LLC", matterName: "Acquisition — NDA Review", practice: "M&A", status: "active", openDate: "Apr 1, 2026", billedHours: 22, invoiceAging: 0, budgetUsed: 18 },
  { id: "m4", client: "Starfield Ventures", matterName: "IP Portfolio Transfer", practice: "Intellectual Property", status: "pending", openDate: "Feb 20, 2026", billedHours: 56, invoiceAging: 14, budgetUsed: 44 },
  { id: "m5", client: "Arclight Development", matterName: "Zoning Variance Appeal", practice: "Real Estate", status: "closed", openDate: "Nov 3, 2025", billedHours: 148, invoiceAging: 0, budgetUsed: 100 },
]`,computed:!1}},showHeaders:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},maxRows:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}}}};var h={title:`Meridian Advisory / MatterTable`,component:m,tags:[`autodocs`],parameters:{layout:`padded`,backgrounds:{default:`meridian-dark`},docs:{description:{component:`
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
        `}}},argTypes:{fidelity:{control:{type:`radio`},options:[`lo`,`mid`,`hi`],description:`Controls information density. Maps to a specific stage in the client engagement workflow.`,table:{defaultValue:{summary:`mid`},type:{summary:`"lo" | "mid" | "hi"`}}},showHeaders:{control:`boolean`,description:`Show or hide the column header row.`},maxRows:{control:{type:`range`,min:1,max:10,step:1},description:`Maximum number of rows to display.`}}},g={args:{fidelity:`lo`,showHeaders:!0,maxRows:5}},_={args:{fidelity:`mid`,matters:r,showHeaders:!0,maxRows:5}},v={args:{fidelity:`hi`,matters:r,showHeaders:!0,maxRows:5}},y={render:()=>(0,t.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:32,fontFamily:`'Inter', sans-serif`},children:[`lo`,`mid`,`hi`].map(e=>(0,t.jsxs)(`div`,{children:[(0,t.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,marginBottom:10},children:[(0,t.jsx)(`span`,{style:{fontSize:10,fontWeight:600,letterSpacing:`0.1em`,color:n[`color/accent/amber`],textTransform:`uppercase`,padding:`2px 8px`,background:`${n[`color/accent/amber`]}18`,border:`1px solid ${n[`color/accent/amber`]}40`,borderRadius:n[`radius/sm`]},children:e.toUpperCase()}),(0,t.jsxs)(`span`,{style:{fontSize:11,color:n[`color/text/secondary`]},children:[e===`lo`&&`Early discovery — structure only`,e===`mid`&&`Architecture review — real data, no data viz`,e===`hi`&&`Dev handoff — full feature set`]})]}),(0,t.jsx)(m,{fidelity:e,matters:r,maxRows:3})]},e))})},b={args:{fidelity:`hi`,matters:r.filter(e=>(e.budgetUsed??0)>=70),showHeaders:!0,maxRows:5}},x={args:{fidelity:`hi`,matters:[r[1]],showHeaders:!1,maxRows:1}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    fidelity: "lo",
    showHeaders: true,
    maxRows: 5
  }
}`,...g.parameters?.docs?.source},description:{story:`**Lo fidelity — skeleton state.**

Gray placeholders replace all content including column headers.
Clients focus on layout and structure only.

Use in early discovery workshops before the information architecture
is validated. Showing real data at this stage invites premature feedback
on content rather than structure.

**Governance note:** This is not a loading state — it is a deliberate
communication tool. Content is withheld by design.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    fidelity: "mid",
    matters: SAMPLE_MATTERS,
    showHeaders: true,
    maxRows: 5
  }
}`,..._.parameters?.docs?.source},description:{story:`**Mid fidelity — structured state.**

Real client names, matter descriptions, practice areas, and status indicators.
Budget bars and action buttons not yet shown.

Use when reviewing information architecture with a stakeholder. Status pills
introduce color at this stage — but only for status. Budget health and aging
colors are deferred to Hi fidelity so data visualization patterns can be
evaluated together.

**Governance note:** This is the most commonly used fidelity level in
production client engagements.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    fidelity: "hi",
    matters: SAMPLE_MATTERS,
    showHeaders: true,
    maxRows: 5
  }
}`,...v.parameters?.docs?.source},description:{story:`**Hi fidelity — full feature state.**

Budget utilization bars, invoice aging indicators, and action buttons.
This is the complete product — what engineering builds from.

The budget bar changes color at 70% (amber) and 90% (red). These thresholds
are token values, not hardcoded, and can be adjusted per-client.

**Governance note:** Invoice aging is only shown when > 0 days. Displaying
"0 days" for clean matters would create noise and train users to ignore the
field — threshold-based display is intentional.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 32,
    fontFamily: "'Inter', sans-serif"
  }}>
      {(["lo", "mid", "hi"] as const).map(level => <div key={level}>
          <div style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 10
      }}>
            <span style={{
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: "0.1em",
          color: MERIDIAN_TOKENS["color/accent/amber"],
          textTransform: "uppercase",
          padding: "2px 8px",
          background: \`\${MERIDIAN_TOKENS["color/accent/amber"]}18\`,
          border: \`1px solid \${MERIDIAN_TOKENS["color/accent/amber"]}40\`,
          borderRadius: MERIDIAN_TOKENS["radius/sm"]
        }}>
              {level.toUpperCase()}
            </span>
            <span style={{
          fontSize: 11,
          color: MERIDIAN_TOKENS["color/text/secondary"]
        }}>
              {level === "lo" && "Early discovery — structure only"}
              {level === "mid" && "Architecture review — real data, no data viz"}
              {level === "hi" && "Dev handoff — full feature set"}
            </span>
          </div>
          <MatterTable fidelity={level} matters={SAMPLE_MATTERS} maxRows={3} />
        </div>)}
    </div>
}`,...y.parameters?.docs?.source},description:{story:`**Fidelity comparison — all three states.**

Same matters at all three fidelity levels. Use to orient new team members
on the toggle architecture or present the system to stakeholders.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    fidelity: "hi",
    matters: SAMPLE_MATTERS.filter(m => (m.budgetUsed ?? 0) >= 70),
    showHeaders: true,
    maxRows: 5
  }
}`,...b.parameters?.docs?.source},description:{story:`**At-risk matters — high budget utilization.**

Matters above 70% budget utilization. Demonstrates threshold-based
data visualization — budget bar color changes automatically based on
token-defined thresholds, not hardcoded conditionals.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    fidelity: "hi",
    matters: [SAMPLE_MATTERS[1]],
    showHeaders: false,
    maxRows: 1
  }
}`,...x.parameters?.docs?.source},description:{story:`**Single matter — embedded display.**

One row without headers. Use when embedding a matter summary within a
larger layout — for example, inside a client health dashboard card
alongside billing signals and communication history.`,...x.parameters?.docs?.description}}};var S=[`Lo`,`Mid`,`Hi`,`FidelityComparison`,`AtRiskMatters`,`SingleMatter`];export{b as AtRiskMatters,y as FidelityComparison,v as Hi,g as Lo,_ as Mid,x as SingleMatter,S as __namedExportsOrder,h as default};