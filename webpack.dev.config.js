'use strict'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineScriptPlugin = require('./index')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('public/index.html'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'auto',
      favicon: resolve('public/favicon.ico')
    }),
    new HtmlWebpackInlineScriptPlugin([
      {
        name: 'apm',
        path: resolve('inject/apm.js'),
        online: true
      },
      {
        name: 'rem',
        path: resolve('inject/rem.js')
      },
      {
        name: 'hubble',
        path: resolve('inject/hubble.js'),
        online: true
      }
    ])
  ],
  devServer: {
    contentBase: resolve('dist'),
    port: 9000
  }
}
