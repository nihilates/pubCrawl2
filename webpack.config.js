const webpack = require('webpack');
const path = require('path');

//Set the paths for reference
const BUILD_DIR = path.resolve(__dirname, 'client/compile');
const APP_DIR = path.resolve(__dirname, 'client');

//configure the build
const config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;