import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const eslintConfig = [{
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"]
}, ...compat.config({
  extends: ["next/core-web-vitals", "next/typescript", "prettier"],
  rules: {},
  ignorePatterns: ["src/generated"],
})];

export default eslintConfig;
