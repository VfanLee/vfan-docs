const presetEnv = require('postcss-preset-env')
var cssnano = require('cssnano')

module.exports = {
  plugins: [presetEnv, cssnano]
}
