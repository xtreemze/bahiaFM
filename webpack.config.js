const OfflinePlugin = require('offline-plugin');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const HTMLMinifierPlugin = require('html-minifier-webpack-plugin');


module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {

    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [{
            loader: 'file-loader?name=[path][name].[ext]?[hash]!',
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
    new ClosureCompilerPlugin({
      compiler: {
        language_in: 'ECMASCRIPT6',
        language_out: 'ECMASCRIPT5',
        compilation_level: 'ADVANCED'
      },
      concurrency: 3,
    }),
    // it always better if OfflinePlugin is the last plugin added
    new OfflinePlugin({
      externals: [
        './index.html',
      ]
    }),
  ],


};



// module.exports = {
//   entry: './entry.js',
//   output: {
//     path: __dirname,
//     filename: 'bundle.js',
//   },
//   module: {
//   test: /\.svg$/,
//   use: [
//     {
//       loader: 'file-loader?name=[name].svg'
//     },
//     {
//       loader: 'svgo-loader',
//       options: {
//         plugins: [
//           {removeTitle: true},
//           {convertColors: {shorthex: false}},
//           {convertPathData: false}
//         ]
//       }
//     }
//   ]
// },
//   module: {
//     loaders: [
//       { test: /\.html$/, loaders: ['file-loader?name=[name].[ext]', 'extract-loader', 'html-loader'] },
//     ]
//   },

//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           { loader: 'style-loader'},
//           {
//             loader: 'css-loader',
//             options: {
//               modules: false
//             }
//           }
//         ]
//       }
//     ]
//   },

// };