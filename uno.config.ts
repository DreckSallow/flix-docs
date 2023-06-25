import { defineConfig } from "unocss";
import { presetUno } from "@unocss/preset-uno";

export default defineConfig({
  presets: [presetUno({})],
  rules: [
    [
      "flex-center",
      {
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
      },
    ],
    [
      "border-base",
      {
        "border-color": "red",
        "border-width": "1px",
      },
    ],
  ],
});
