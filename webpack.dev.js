const path = require("path");
const webpack = require("webpack");
const common = require("./webpack.common");  // This is the common properties for both dev and prod files
const merge = require("webpack-merge");      // With this plugin I am able to merge files
const HtmlWebpackPlugin = require('html-webpack-plugin');     // This plugin generates an HTML with dynamic links to our assets and JS or CSS files, so if the hash changes the link will still  work 

module.exports = merge(common, {            //Note the merge function call
  mode: "development",           // Setting the mode to development it stops webpack from minifying the bundle.js so the final bundle file is more readable
  output: {
    path: path.resolve(__dirname, "dist/"),    // THis creates a folder dist with our current directory as prefix path
    filename: "[name].bundle.js",      // The [name] is coming from each of our entry points in the common webpack file, it can be main or vendor     
  },
  module:{
    rules:[
        {
            test: /\.scss$/,       // Everytime it matches this regex (SASS), then what to use
            use: ["style-loader", // 3. Implement the css to the DOM
            "css-loader",         // 2. convert css to JS
            "sass-loader"]  // 1. COnvert sass to cssTHIS HAPPENS IN REVERSE ORDER SASS LOADER FIRST
        },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html"    // This plugin generates an HTML with dynamic links to our assets and JS or CSS files, so if the hash changes the link will still  work 
  })]
});