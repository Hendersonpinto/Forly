const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",       // Where the bundling should start
  mode: "development",           // Setting the mode to development it stops webpack from minifying the bundle.js so the final bundle file is more readable
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]  //THIS HAPPENS IN REVERSE ORDER SASS LOADER FIRST
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist/"),    // THis creates a folder dist with our current directory as prefix path
    publicPath: "/dist/",          
    filename: "bundle.js"                      // This is the final file that is going to be created
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};