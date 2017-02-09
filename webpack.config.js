const OfflinePlugin = require('offline-plugin');

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      { test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
          { removeTitle: true },
          { convertColors: { shorthex: true } },
          { convertPathData: false },
              ],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // ... other plugins
    // it always better if OfflinePlugin is the last plugin added
    new OfflinePlugin({ externals: [
      './index.html',
    ] }),
  ],


};
