const rucksack = require('rucksack-css')
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ENV = process.env.NODE_ENV || 'development'
const isProd = ENV === 'production'
const WebpackErrorNotificationPlugin = require('webpack-error-notification')

module.exports = {
  debug: !isProd,
  cache: !isProd,
  devtool: isProd ? '#eval' : '#cheap-module-eval-source-map',
  context: path.join(__dirname, 'client'),
  entry: {
    index: './index.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[hash].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /client/,
        loader: 'babel',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        include: /client/,
        loaders: [
          'style',
          'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss',
        ],
      },
      {
        test: /\.css$/,
        exclude: /client/,
        loader: 'style!css',
      },
      {
        test: /\.(png|jpg|wav)$/,
        loader: 'file',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(woff(2)|ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file',
      },
    ],
  },
  resolve: {
    extension: ['', '.js', '.jsx'],
    unsafeCache: true,
  },
  postcss: [
    rucksack({
      autoprefixer: true,
    }),
  ],
  plugins: (function () {
    const plugins = [
      new HtmlWebpackPlugin({}),
      new WebpackErrorNotificationPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(ENV),
        },
      }),
    ]

    if (isProd) {
      plugins.push(new webpack.optimize.OccurrenceOrderPlugin(false))
      plugins.push(new webpack.optimize.DedupePlugin())
      plugins.push(new webpack.optimize.UglifyJsPlugin({
        screwIe8: true,
        compress: {
          warnings: false,
        },
        output: {
          comments: false,
        },
      }))
    }

    return plugins
  }()),
  devServer: {
    contentBase: './client',
    hot: false,
  },
}
