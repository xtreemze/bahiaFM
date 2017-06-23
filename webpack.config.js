const HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
const ClosureCompiler = require('google-closure-compiler-js')
  .webpack;
const OfflinePlugin = require('offline-plugin');


module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {

    rules: [{
        test: /\indexB.html$/,
        loaders: ['file-loader?name=[path]index.[ext]?[hash]!', 'extract-loader', 'html-loader']
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.png$/,
        use: ['url-loader?limit=3000?name=[path][name].[ext]?[hash]!'],
      },
      {
        test: /\.jpg$/,
        use: ['url-loader?limit=3000?name=[path][name].[ext]?[hash]!'],
      },
      {
        test: /\.svg$/,
        use: [{
            loader: 'svg-url-loader?limit=5000?name=[path][name].[ext]?[hash]!',
          },
          {
            loader: 'svgo-loader?name=[path][name].[ext]?[hash]!',
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
    new HtmlMinifierPlugin({
      // HTMLMinifier options 
    }),
<<<<<<< HEAD
    new ClosureCompiler({
=======

    new ClosureCompilerPlugin({
>>>>>>> parent of 67ea4ee... webpack updates
      compiler: {
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT5',
        compilation_level: 'ADVANCED',
        warning_level: 'QUIET',
        externs: [{ src: `
                      jsonUpdate();
                      stats;
               ` }],
      },
      makeSourceMaps: true,
      concurrency: 6,
    }),
    /*        new ClosureCompilerPlugin({
                compiler: {
                    language_in: 'ECMASCRIPT6',
                    language_out: 'ECMASCRIPT5',
                    compilation_level: 'SIMPLE'
                },
                concurrency: 4,
            }),*/
    // it always better if OfflinePlugin is the last plugin added
    new OfflinePlugin({
      externals: [
        './index.html',
      ]
    }),
  ],

};
