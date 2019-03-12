const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const version = require(path.join(__dirname, 'package.json')).version; // eslint-disable-line import/no-dynamic-require

const copy = new CopyWebpackPlugin([
  {
    context: './src/',
    from: 'manifest.json',
    to: 'manifest.json',
    transform: content => content.toString().replace('VERSION', `"${version}"`),
  },
]);

module.exports = {
  mode: 'development',
  entry: {
    'content-script.js': './src/main.tsx',
  },
  output: {
    path: path.join(__dirname, './build/'),
    filename: '[name]',
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    copy,
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
  ],
};
