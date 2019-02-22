const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './app/assets/scripts/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        name: main.js
    },
    module: {
        rules: [
            {
                test: /\.(html)$/,
                loader: 'html-srcsets-loader',
                options: {
                    attrs: ['img:src', ':srcset'],
                    minimize: false,
                    caseSensitive: true,
                    removeAttributeQuotes: false
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)/i,
                loader: "file-loader",
                options: {
                    publicPath: "./images",
                    outputPath: "./images"
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./app/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]

};