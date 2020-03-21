const path = require("path");
const webpack = require("webpack");
const common = require("./webpack.common");   // THIS IS USED TO TAKE THE COMMON AS TEMPLATE
const merge = require("webpack-merge");       // TO MERGE THE COMMON FILED REQUIRED ABOVE TO THIS ONE
const {CleanWebpackPlugin} = require("clean-webpack-plugin");  // THIS CLEANS PREVIOUS BUNDLES GENERATED
const MiniCssExtractPlugin = require ("mini-css-extract-plugin") // THIS IS USED TO EXTRACT A SEPARATE FILE FOR CSS SO IT DOES NOT HAVE TO WAIT FOR JS TO LOAD TO LOAD THE STYLE
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");  // It MINIFIES THE CSS BUT I DID NOT USE IT BECAUSE THE MINIMIZER BY DEFAULT DOES IT
const HtmlWebpackPlugin = require('html-webpack-plugin'); // This plugin generates an HTML with dynamic links to our assets and JS or CSS files, so if the hash changes the link will still  work 

module.exports = merge(common, {
    mode: "production",           // Setting the mode to production it minifyes
    
    output: {
    path: path.resolve(__dirname, "dist/"),    // THis creates a folder dist with our current directory as prefix path
    filename: "[name].[contentHash].bundle.js",      // The [name] is coming from each of our entry points in the common webpack file, it can be main or vendor     
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "[name].[contentHash].css"}), // New names for the css output with a hash on them
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            minify:{
                removeAttributeQuotes: true,
                collapseWhitespace: true,                     // WHAT TO DO WHEN MINIFYING THE HYTML
                removeComments: true
            }
          })],
    module:{
        rules:[
            {                
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, // Extract css into files
                "css-loader",         // 2. convert css to JS
                "sass-loader"]  // 1. Convert sass to css -- THIS HAPPENS IN REVERSE ORDER SASS LOADER FIRST
            }
        ]
    }
});