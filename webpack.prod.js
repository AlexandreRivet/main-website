const merge = require('webpack-merge');
const common = require('./webpack.common');
const minifyPlugin = require('babel-minify-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new minifyPlugin(),
        new copyWebpackPlugin([{ from: 'public', ignore: ['index.html'] }])
    ]
});