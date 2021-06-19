module.exports = {
  module: {
    rules: [
      {
        test: /\.*pdfjs-dist.*$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
