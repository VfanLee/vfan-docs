module.exports = {
  env: {
    node: true,
    browser: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {},
  plugins: ['import'] // 支持动态导入语法
}
