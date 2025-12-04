import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    // 적용 파일
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],

    // 환경설정
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },

    // React 설정 (Hook 규칙, JSX 등)
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginReact.configs.flat.recommended,

  
  prettier, // Prettier와 ESLint 충돌 방지 (반드시 마지막!)
]);
