const path = require('path');
const slsw = require('serverless-webpack');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');

const entries = {};

Object.keys(slsw.lib.entries).forEach(
  key => (entries[key] = ['./source-map-install', slsw.lib.entries[key]])
);

module.exports = {
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: entries,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.jsx$/, loader: 'babel-loader' },
      { test: /\.js$/, loader: 'babel-loader' },
      {
        test: /\.(css|scss)$/,
        loader: [
            ExtractCssChunksPlugin.loader,
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    plugins: () => [require('autoprefixer')],
                },
            },
            'sass-loader',
        ],
    },
    ],
  },
};