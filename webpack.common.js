const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: "./src/index.js", // Where the bundling should start bundling
    vendor: "./src/vendor.js",
  }, // Where the bundling should start bundling
  module: {
    rules: [
      {
        test: /\.html$/, // When encounters this regex (HTML files) then use
        use: ["html-loader"], // What to use for HTML files. This loader will handle the img or assets files by changing src to require
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/, // What type of assets include
        use: {
          loader: "file-loader", // When encounter one of those files, this loader is needed for html-loader to work. This handles all the require statements
          options: {
            name: "[name].[hash].[ext]", // Each asset will have a hash in their name so it loads only if we change the file
            outputPath: "images",
          },
        },
      },
      {
        test: /\.mp4$/,
        use: "file-loader?name=videos/[name].[ext]",
      },
      {
        test: /\.svg$/, // What type of assets include
        use: {
          loader: "file-loader", // When encounter one of those files, this loader is needed for html-loader to work. This handles all the require statements
          options: {
            name: "[name].[hash].[ext]", // Each asset will have a hash in their name so it loads only if we change the file
            outputPath: "images",
          },
        },
      },
    ],
  },
};
