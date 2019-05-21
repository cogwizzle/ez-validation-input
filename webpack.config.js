const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/ez-validation-input',
  output: {
    library: 'ez-validation-input',
    filename: 'ez-validation-input.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
};