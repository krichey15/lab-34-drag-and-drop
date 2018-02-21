'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  
  entry: `${__dirname}/src/main.js`,

  devServer: {
    historyApiFallback: true, // server index.html for 404 routes
  },
    
  output: {
    filename: 'bundle.[hash].js',
    path: `${__dirname}/build`,
  },
    
  plugins: [
    new HTMLPlugin(),
    new ExtractPlugin('bundle.[hash].css'),
  ],
    
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },  
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract({
          use: [
            {
              loader: 'css-loader', 
              options: {
                sourceMap:true,
              },
            },
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
                includePaths:[`${__dirname}/src/style`],
              },
            },
          ],
        }),
      },
            
    ],
  },
    
};