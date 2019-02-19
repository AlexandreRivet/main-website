const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const cleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require('webpack');

const distDirectory = 'dist';

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, distDirectory),
    },
    plugins: [
        new cleanWebpackPlugin([distDirectory]),
        new htmlWebpackPlugin({
            template: './public/index.html',
            minify: true
        }),
        new webpack.ProvidePlugin({
            THREE: 'three'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.glsl$/,
                use: ["webpack-glsl-loader"]
            }
        ]
    }
};
