// entry point: ./src/index.js
// required webpack config properties: entry, output

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), // absolute path
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  module: {
    // babel-loader is a rule of the module system
    rules: [
      {
        use: 'babel-loader', // babel-loader relies on .babelrc for config options, that is where we specify babel-preset-env
        test: /\.js$/ // all files ending in .js
      },
      {
        // 'loader' is legacy syntax; it works almost like the 'use' field, ExtractTextPlugin only supports 'loader' in its current version
        loader: ExtractTextPlugin.extract({ // combine imported css (from .js files) into a single file in output directory
          // loader: preprocess files before included into webpack bundle
          // plugin: works outside webpack pipeline; can redirect files to not be included in webpack bundle
          loader: 'css-loader'
        }),
        // use: ['style-loader', 'css-loader'], // loaders are applied from RIGHT TO LEFT; css-loader applies before style-loader
        test: /\.css$/ // all files ending in .css
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader', // "Loads files as `base64` encoded URL"
            options: {
              limit: 40000 // size limit in bytes
            }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};

module.exports = config;