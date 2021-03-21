const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.common');

module.exports = merge(baseConfig, {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: {
      index: '/',
    },
  },
  plugins: [new HotModuleReplacementPlugin()],
});
