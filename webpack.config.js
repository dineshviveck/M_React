const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

var config = {
  entry: {main:['babel-polyfill','./src/index.js']},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'target'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './src',
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true
  },
  module : {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {loader: "babel-loader"}
      },
      {
        test: /\.scss$/,
        use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
          test: /\.(png|svg|jpg|gif)$/,
          use: {
              loader: 'file-loader?name=[name].[ext]&outputPath=assets/',
          }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['target']),
    new HtmlWebpackPlugin({template: './public/index.html'}),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};

module.exports = config;
