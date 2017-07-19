require('babel-loader');
const webpack = require('webpack');
const path = require('path');

const env = process.env.NODE_ENV || 'development';
const debug = env === 'development';

module.exports = {
  context: __dirname,

  devtool: debug ? 'eval' : false,

  entry: {
    UntimeToolbox: './src/index.js',
  },

  output: {
    path: path.join(__dirname, './build'),
    publicPath: '/',
    filename: './[name].jsx',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['react-hot-loader', 'babel-loader'],
      },
    ],
  },

  resolve: {
    modules: [
      path.resolve(__dirname),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },

  plugins: debug ? [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false,
    }),
  ],
};
