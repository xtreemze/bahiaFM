<<<<<<< HEAD
function buildConfig(env) {
  return require('./' + env + '.js')({ env: env });
}
module.exports = buildConfig;
=======
const HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
const ClosureCompiler = require('google-closure-compiler-js')
  .webpack;
// const OfflinePlugin = require('offline-plugin');
module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  stats: {
    warnings: false,
  },
  module: {
    rules: [{
      test: /\indexB.html$/,
      loaders: ['file-loader?name=[path]index.[ext]',
        'extract-loader', 'html-loader'
      ]
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
  plugins: [
    // ... other plugins
    new HtmlMinifierPlugin({
      // HTMLMinifier options 
    }),
    new ClosureCompiler({
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
      // makeSourceMaps: true,
      concurrency: 4,
    }),
    // new OfflinePlugin({
    //   caches: 'all',
    //   responseStrategy: 'network-first',
    //   updateStrategy: 'all',
    //   minify: 'true',
    //   ServiceWorker: {
    //     events: 'true',
    //   },
    //   AppCache: {
    //     events: 'true',
    //   },
    // }),
  ],
};
>>>>>>> 20b2f9d0256cf9dd2ab5e920fa8b1162e0ae24e0
