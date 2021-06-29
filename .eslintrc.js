module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-irregular-whitespace": 0,
    "no-unused-vars": "off", // 声明了未使用不报错
    "@typescript-eslint/no-unused-vars": ["off"],//没有使用的参数，不会报错。
    "@typescript-eslint/no-empty-function":["off"],  // 方法内部没有逻辑不报错，可以先定义方法名后使用
    "@typescript-eslint/no-explicit-any":["off"], 
  },
};
