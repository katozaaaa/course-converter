import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"]
  },
  {
    languageOptions: { globals: globals.browser }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
        "quotes": ["warn", "single"],
        "jsx-quotes": ["warn", "prefer-double"],
        "indent": ["warn", 4],
        "semi": ["warn"],
    }
  },
  {
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  },
];