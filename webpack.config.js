const path = require('path');
const dist = path.join(__dirname, 'dist');


module.exports = {
  entry: {
    bundle: './src/client/app.js',
    worker: './src/client/worker.js'
  },
  output: { filename: '[name].js', path: dist },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      }]
  }
};
