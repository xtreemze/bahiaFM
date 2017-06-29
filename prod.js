const HtmlMinifierPlugin = require('html-minifier-webpack-plugin');
const ClosureCompiler = require('google-closure-compiler-js')
  .webpack;
const OfflinePlugin = require('offline-plugin');
//
module.exports = function prod(env) {
  return {
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
          'extract-loader', 'html-loader',
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
    plugins: [
      // ... other plugins
      new HtmlMinifierPlugin({}),
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
        concurrency: 4,
      }),
      new OfflinePlugin({
        caches: 'all',
        responseStrategy: 'network-first',
        updateStrategy: 'all',
        minify: 'true',
        ServiceWorker: {
          events: 'true',
        },
        AppCache: {
          events: 'true',
        },
      }),
    ],
  };
};
