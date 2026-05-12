import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "meridian-dark",
      values: [
        { name: "meridian-dark", value: "#16181d" },
        { name: "meridian-slate", value: "#1e2028" },
        { name: "light", value: "#ffffff" },
      ],
    },
  },
};

export default preview;
