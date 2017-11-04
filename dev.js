module.exports = function dev(env) {
  return {
    entry: "./entry.js",
    output: {
      path: __dirname,
      filename: "bundle.js"
    },
    stats: {
      warnings: false
    },
    resolve: {
      alias: {
        webworkify: "webworkify-webpack-dropin"
      }
    },
    devtool: "cheap-module-source-map",
    module: {
      rules: [
        {
          test: /indexB.html$/,
          loaders: [
            "file-loader?name=index.[ext]",
            "extract-loader",
            "html-loader"
          ]
        },
        {
          test: /\.css$/,
          use: [
            // "style-loader",
            // "css-loader",
            "postcss-loader"
          ]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          loaders: [
            "file-loader?name=build/[name].[ext]",
            {
              loader: "image-webpack-loader",
              options: {}
            }
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: "file-loader?name=[path][name].[ext]"
        },
        // {
        //   test: /\.svg$/,
        //   use: [
        //     {
        //       loader: "file-loader?name=build/[name].[ext]"
        //     }
        //   ]
        // },
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: "babel-loader?cacheDirectory",
              options: {
                presets: [["@babel/preset-env", { modules: false }]]
              }
            }
          ]
        }
      ]
    }
  };
};
