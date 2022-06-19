const path = require('path');
// const SRC = path.resolve(__dirname, './src');

module.exports = {
    entry: {
        script: './src/main.ts',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.mp3$/,
          loader: 'file-loader',
          options: {
              name: '[name].[ext]'
          }
        },
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    watch: true
}
