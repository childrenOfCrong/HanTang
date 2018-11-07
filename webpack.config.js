const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
  const config = {
    entry: "./src/js/app.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ["file-loader"]
        },
        {
          test: /\.scss$/,
          use: [
            // fallback to style-loader in development
            process.env.NODE_ENV !== "production" ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ]
        },
        {
          test: /\.html$/,
          use: ["html-loader"]
        }
      ],
      htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/],
        root: path.resolve(__dirname, "assets"),
        attrs: ["img:src", "link:href"]
      }
    }
  };
  if (options.mode === "development") {
    config.plugins = [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        filename: "./dist/index.html",
        template: "./dist/index.html",
        title: "Development",
        showErrors: true // 에러 발생시 메세지가 브라우저 화면에 노출 된다.
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ];
    config.devtool = "inline-source-map";
    config.devServer = {
      contentBase: "./dist",
      hot: true, // 서버에서 HMR을 켠다.
      host: "0.0.0.0", // 디폴트로는 "localhost" 로 잡혀있다. 외부에서 개발 서버에 접속해서 테스트하기 위해서는 '0.0.0.0'으로 설정해야 한다.
      contentBase: "./dist", // 개발서버의 루트 경로
      stats: {
        color: true
      }
    };
  } else {
    config.plugins = [new CleanWebpackPlugin(["dist"])];
  }
  return config;
};
