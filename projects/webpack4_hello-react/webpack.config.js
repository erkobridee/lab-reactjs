const path = require('path');

const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

// https://webpack.js.org/configuration/configuration-types/#exporting-a-function
module.exports = (env, argv) => {

  return {
    entry: {
      app: './src/index.js'
    },
    
    output: {
      path: path.join(__dirname, '/dist'),
      filename: '[name].[hash].js'
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: (argv.mode === 'production')
              }
            }
          ] 
        },
        {
          test: /\.s?[ac]ss$/,
          use: [
            (
              argv.mode !== 'production' ? 
                // creates styles nodes from JS strings
                'style-loader' :
                // extracts the styles to a .css file
                MiniCssExtractPlugin.loader
            ), 
            // translates CSS into CommonJS
            {
              // https://blog.pusher.com/css-modules-react/
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            // compiles Sass to CSS
            'sass-loader'
          ]
        }
      ]
    },

    plugins: [
      new CleanWebpackPlugin('dist', {}),
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[hash].css",
        chunkFilename: "[id].css"
      })
    ],

    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ],
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            enforce: true,
            chunks: 'initial'
          },
        }
      }
    }
  };
};