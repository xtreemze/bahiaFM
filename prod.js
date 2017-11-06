// import * as OfflinePluginRuntime from "offline-plugin/runtime";
// OfflinePluginRuntime.install();
// const OfflinePlugin = require("offline-plugin");

const OfflinePlugin = require("offline-plugin");
const HtmlMinifierPlugin = require("html-minifier-webpack-plugin");
const ClosureCompiler = require("google-closure-compiler-js").webpack;
// const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const glob = require("glob-all");

//
module.exports = function prod(env) {
  return {
    entry: "./entry.js",
    output: {
      path: __dirname,
      filename: "bundle.js"
    },
    stats: {
      warnings: false
    },
    devtool: "cheap-source-map",
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
          use: ["style-loader", "css-loader", "postcss-loader"]
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          loaders: [
            "file-loader?name=build/[name].[ext]",
            {
              loader: "image-webpack-loader",
              options: {
                gifsicle: {
                  interlaced: false
                },
                // optipng: {
                //   optimizationLevel: 7
                // },
                pngquant: {
                  quality: "65-90",
                  speed: 4
                },
                mozjpeg: {
                  progressive: true,
                  quality: 65
                }
                // Specifying webp here will create a WEBP version of your JPG/PNG images
                // webp: {
                //   quality: 75
                // }
              }
            }
          ]
        },
        {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: "file-loader?name=build/[name].[ext]"
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: "babel-loader?cacheDirectory",
              options: {
                presets: [["env", { modules: false }]]
              }
            }
          ]
        }
      ]
    },
    plugins: [
      // new ImageminPlugin({
      //   pngquant: {
      //     quality: "95-100"
      //   }
      // }),
      // ... other plugins
      new HtmlMinifierPlugin({}),
      // new OptimizeJsPlugin({
      //   sourceMap: true
      // }),
      new ClosureCompiler({
        compiler: {
          language_in: "ECMASCRIPT6",
          language_out: "ECMASCRIPT5",
          compilation_level: "ADVANCED",
          warning_level: "QUIET",
          externs: [
            // {
            //   src: `
            //    `
            // }
          ]
        },
        makeSourceMaps: true,
        concurrency: 4
      }),
      // new ExtractTextPlugin("[name].css"),
      // new PurifyCSSPlugin({
      //   minimize: true,
      //   verbose: true,
      //   // Give paths to parse for rules. These should be absolute!
      //   paths: glob.sync([
      //     path.join(__dirname, "*.html"),
      //     path.join(__dirname, "js/*.js")
      //   ])
      // }),
      new OfflinePlugin({
        externals: [],
        caches: "all",
        responseStrategy: "network-first",
        // responseStrategy: "cache-first",
        updateStrategy: "all",
        minify: "true",
        autoUpdate: 1000 * 60 * 60 * 2,
        ServiceWorker: {
          events: "true"
        },
        AppCache: {
          events: "true"
        }
      })
    ]
  };
};
