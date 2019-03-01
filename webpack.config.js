const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: {
    main: "./app/assets/scripts/main.js"
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: "./images",
              publicPath: "./images"
            },
          },
        ],
      },
      {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        },{
          loader: MiniCssExtractPlugin.loader
        },{
          loader: 'css-loader',
          options: { url: false }
        },{
          loader: 'sass-loader'
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]

}