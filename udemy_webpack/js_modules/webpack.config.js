// entry point: ./src/index.js
// required webpack config properties: entry, output

const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'), // absolute path
    filename: 'bundle.js'
  }
};

module.exports = config;