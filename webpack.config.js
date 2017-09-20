module.exports = {
  entry: __dirname + '/src/index.js',
  output: { path: __dirname + '/pub', filename: 'bundle.js' },
  watch: true,  //auto compiles webpack when files change, dev only
  module: {
    loaders: [
      {
        test: /\.jsx?$/,  //compiles js or jsx
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:['react'] //move to .babelrc?
        }
      }
    ]
  }
};
