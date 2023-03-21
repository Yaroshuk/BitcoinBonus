module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "plugin:react/recommended",
    "standard"
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    quotes: ["error", "double"],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "react/prop-types": 0,
    "no-unused-vars": 1,
    "space-before-function-paren": 0
  },
  settings: {
    react: {
      version: "detect"
    }
  }
}
