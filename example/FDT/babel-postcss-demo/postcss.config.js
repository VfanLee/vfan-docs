module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 1
    },
    'postcss-rtl': {
      addPrefixToSelector(selector, prefix) {
        return `html${prefix} ${selector}`
      }
    },
    'cssnano': {}
  }
}
