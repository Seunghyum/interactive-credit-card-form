const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const baseConfig = require('./webpack.config.common');

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    publicPath: './',
  },
  plugins: [new HotModuleReplacementPlugin()],
});
