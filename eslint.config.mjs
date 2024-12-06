import pluginJs from "@eslint/js"
import js from "@eslint/js"
import react from "eslint-plugin-react"
import reactNative from "eslint-plugin-react-native"
import typescriptEslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import tseslint from "typescript-eslint"

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ["**/*.config.js"], // Exclude config files
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["**/*.ts", "**/*.tsx"], // Target TypeScript and React TypeScript files
    ignores: ["example/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Enable JSX syntax
        },
      },
    },

    plugins: {
      react,
      "@typescript-eslint": typescriptEslint,
      reactNative,

      pluginJs,
    },

    rules: {
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      // These rules are disabled for now, but will be enabled later
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-redundant-type-constituents": "off",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": ["off", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-require-imports": "off",
      semi: "off",
      "prefer-const": "error", // Enforce 'const' where possible
     
      //"prettier/prettier": ["error", { endOfLine: "auto" }], // Use Prettier to enforce code style
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
  },
]
