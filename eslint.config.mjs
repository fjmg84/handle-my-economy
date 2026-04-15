import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import nextConfig from "eslint-config-next";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";


export default defineConfig([
  // Reglas base de JS
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },

  // Next.js flat config: incluye react, react-hooks, import, @next/next, jsx-a11y
  ...nextConfig,

  // TypeScript ESLint
  tseslint.configs.recommended,

  // Reglas personalizadas
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: {
      "local-rules": {
        rules: {
        },
      },
    },
    rules: {
      // General
      eqeqeq: ["warn", "always"],
      "no-param-reassign": "error",
      "no-var": "warn",
      "prefer-const": "warn",
      "no-dupe-keys": "warn",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react",
              importNames: ["default"],
              message:
                "Please do not use `import React from 'react'`; import named exports instead.",
            },
          ],
        },
      ],
      "no-restricted-globals": [
        "error",
        {
          name: "React",
          message: "Do not use the React global. Import from 'react' directly.",
        },
      ],

      // React (JSX transform automático, no necesita React en scope)
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      // React Hooks
      "react-hooks/exhaustive-deps": "warn",

      // Import
      "import/no-cycle": ["error", { ignoreExternal: true }],
      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always",
        },
      ],
      "import/no-named-as-default": "off",
      "import/named": "off",

      // TypeScript
      "local-rules/no-self-recursive-jsx": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: false,
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },

  // Overrides para tests
  {
    files: ["**/*.test.ts", "**/*.test.tsx"],
    languageOptions: {
      globals: {
        globalThis: "readonly",
      },
    },
  },

  // Prettier: desactiva reglas de ESLint que conflicten y reporta diferencias como errores
  prettierConfig,
  {
    plugins: { prettier: prettierPlugin },
    rules: {
      "prettier/prettier": "warn",
    },
  },
]);
