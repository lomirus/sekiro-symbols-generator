const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: ['babel-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template/index.html",
            favicon: "./src/template/favicon.ico"
        }),
        new ESLintPlugin(),
    ],
    resolve: {
        extensions: [".tsx", ".js"]
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        open: true
    }
}