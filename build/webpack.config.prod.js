const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const baseConfig = require('./webpack.config.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(baseConfig, {
  mode: 'production',
  output: {
    publicPath: './',
  },
  plugins: [
    new HotModuleReplacementPlugin(), 
    new BundleAnalyzerPlugin(),
    new CompressionPlugin()
  ],
});
