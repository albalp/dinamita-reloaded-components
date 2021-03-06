const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;
const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index.js",
  output: {
    publicPath: "http://localhost:3001/",
  },

  devServer: {
    open: true,
    port: 3001,
    historyApiFallback: true,
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-react",
              {
                runtime: "automatic", // This is the configuration that allows you not to import React from 'react' It's a good practice
              },
            ],
          ],
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // new webpack.DefinePlugin({
    // 'process.env': JSON.stringify(process.env),
    // }),
    new FaviconsWebpackPlugin("./public/favicon.ico"),
    new ModuleFederationPlugin({
      name: "modal",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./modal": "./src/App.js",
      },

      shared: {
        ...deps,

        react: { singleton: true, eager: true, requiredVersion: deps.react },

        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};