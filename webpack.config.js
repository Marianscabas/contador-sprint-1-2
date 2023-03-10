const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'none',
    entry:
    {

        app: [

            './src/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/app.bundle.js'

    },
    devServer: {
        port: 3001,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.js$/i
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }

        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
            minify: {
                collapseWhitespace:
                    true, removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            }

        }),

        new MiniCssExtractPlugin({
            filename: 'css/app.bundle.css'
        }),

    ]

};