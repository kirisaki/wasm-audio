const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin")

module.exports = {
   entry: {
    main: path.join(__dirname, './client/index.tsx'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", "wasm"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "client/index.html")
    }),
    new WasmPackPlugin({
      crateDirectory: path.join(__dirname, "src")
    })
  ]
};
