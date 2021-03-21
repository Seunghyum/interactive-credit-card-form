const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const baseConfig = require('./webpack.config.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: './',
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
    new CompressionPlugin(),
    new CleanWebpackPlugin(),
  ],
});
