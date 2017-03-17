const webpack = require('webpack');
const path = require('path');
const { resolve } = require('path');
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: 3000
  },
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    path.join(__dirname, 'index.js')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules(?!\/react-native-vector-icons)/,
        loader: 'babel-loader?+cacheDirectory'
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      },
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules')
    ],
    alias: {
      'react-native': 'react-native-web',
      'react-navigation': 'react-navigation-web'
    }
  }
};
