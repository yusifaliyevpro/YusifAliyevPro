import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "neon-blue":
          "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 1rem #5271ff, 0 0 0.8rem #5271ff, 0 0 2.8rem #5271ff, inset 0 0 1.3rem #5271ff",
        "neon-white":
          "0 0 0.2rem #fff, 0 0 0.2rem #fff, 0 0 1rem #fff, 0 0 0.8rem #fff, 0 0 2.8rem #fff, inset 0 0 1.3rem #fff",
        "ltr-small":
          "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06),",
      },
    },
  },
  plugins: [nextui()],
};
