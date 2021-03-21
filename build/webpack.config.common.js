const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: resolve(__dirname, '../src/index.tsx'),
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, '../dist'),
    publicPath: './',
  },
  resolve: {
    modules: ['node_modules', 'modules'],
    extensions: ['*', '.ts', '.tsx', '.js'],
    alias: {
      '~src': resolve(__dirname, '../src'),
      '~components': resolve(__dirname, '../src/components'),
      '~pages': resolve(__dirname, '../src/pages'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
        options: {
          configFile: resolve(__dirname, '../tsconfig.json'),
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg|gif)/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../public/index.html'),
      favicon: resolve(__dirname, '../public/favicon.ico'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
