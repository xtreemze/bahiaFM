module.exports = function dev(env) {
  return {
    entry: './entry.js',
    output: {
      path: __dirname,
      filename: 'bundle.js',
    },
    stats: {
      warnings: false,
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
      rules: [{
        test: /indexB.html$/,
        loaders: ['file-loader?name=index.[ext]', 'extract-loader',
          'html-loader',
        ],
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.svg$/,
        use: [{
          loader: 'file-loader?name=[path][name].[ext]',
        }],
      }, {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', { modules: false }],
            ],
          },
        }],
      }],
    },
  };
};
