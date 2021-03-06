// Webpack uses this to work with directories
const path = require('path');
const webpack = require('webpack'); // to access built-in plugins
const src = path.resolve(__dirname, './src/');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const HtmlWebPackPlugin = require("html-webpack-plugin");



// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin his work
  entry: [path.resolve(__dirname, `${src}/js/main.js`), path.resolve(__dirname, `${src}/js/styles.js`)],

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: false,
  devtool: 'source-map',

  devServer: {
    publicPath: '/dist/',
    port: 3000
  },
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
      },
      {
        test: /\.css$/,
        use : [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              }
            }
        ],
      },
      {
        test:/\.scss$/,
        use:[
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
              reloadAll: true, 
              minimize: true,
              sourceMap: true
            },
          },
          'css-loader',
          //'postcss-loader',
          'sass-loader',
        ],

      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.(svg|png|jpeg|jpg)$/, 
        use: 'url-loader?limit=100000', 
      },

    ],
  },  
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new CleanWebpackPlugin(),
    new WebpackBuildNotifierPlugin({
      sound: 'Funk',
      successSound: false,
      suppressSuccess: true,
      activateTerminalOnError: true,
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],            
      }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  
  resolve: {
    extensions: ['.js', '.scss']
  },

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript 
  // minifying and other thing so let's set mode to development
  mode: 'development'
};