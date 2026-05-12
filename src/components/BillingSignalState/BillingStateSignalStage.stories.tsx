import type { Meta, StoryObj } from "@storybook/react";
import BillingSignalState from "./BillingSignalState";

const meta: Meta<typeof BillingSignalState> = {
  title: "Meridian/BillingSignalState",
  component: BillingSignalState,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
A three-state motion system for billing intelligence interfaces.

State transitions are governed by design tokens — duration and easing
communicate urgency level rather than relying on color alone.

| State | Token | Duration | Easing | Intent |
|-------|-------|----------|--------|--------|
| Calm | \`--duration-calm\` | 0ms | — | Stillness is the default. Motion in a calm state creates noise. |
| Signal | \`--duration-signal\` | 300ms | ease-out | Decelerates into attention. Deliberate, not reactive. |
| Alert | \`--duration-alert\` | 180ms | ease-in | Accelerates — speed communicates urgency. |

All tokens are WCAG AA verified on \`#16181d\`.
        `,
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BillingSignalState>;

export const Default: Story = {
  name: "Default (Calm state)",
  parameters: {
    docs: {
      description: {
        story:
          "Initial render. No motion, no signals active. Stillness communicates system health at a glance.",
      },
    },
  },
};

export const AllStates: Story = {
  name: "Interactive — all three states",
  parameters: {
    docs: {
      description: {
        story:
          "Use the CALM / SIGNAL / ALERT buttons to cycle through states manually, or trigger AUTOPLAY SEQUENCE to watch the full state progression. Observe how duration and easing shift with urgency level.",
      },
    },
  },
};

export const AutoPlaySequence: Story = {
  name: "Autoplay sequence",
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the full calm → signal → alert → calm arc. The motion token annotation updates in real time, showing which token governs each transition.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const buttons = canvasElement.querySelectorAll("button");
    const autoplay = Array.from(buttons).find((b) =>
      b.textContent?.includes("AUTOPLAY")
    );
    if (autoplay) autoplay.click();
  },
};