const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: ['./src/ez-validation-input'],
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
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  useBuiltIns: "usage",
                  corejs: 3,
                  targets: {
                    browsers: [
                      "Chrome >= 52",
                      "FireFox >= 44",
                      "Safari >= 7",
                      "Explorer 11",
                      "last 4 Edge versions"
                    ]
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  }
};