/*
 * @Desc:
 * @Version: v1.00
 * @Author: wc
 * @Date: 2022-11-03 14:18:12
 * @LastEditors: wc
 * @LastEditTime: 2022-11-03 15:25:47
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".js", "cjs", "json"]
  },
  devServer: {},
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};
