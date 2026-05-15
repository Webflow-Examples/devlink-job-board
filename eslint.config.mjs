import next from "eslint-config-next";

/** @type {import("eslint").Linter.Config[]} */
const config = [
  {
    ignores: ["webflow/**"],
  },
  ...next,
];

export default config;
