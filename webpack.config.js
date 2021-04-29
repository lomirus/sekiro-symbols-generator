const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const PRODUCTION = process.env.NODE_ENV === 'production'

module.exports = {
    mode: PRODUCTION ? 'production' : 'development',
    entry: {
        app: {
            import: "./src/index.tsx",
            dependOn: "react-vendors"
        },
        'react-vendors': ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.ttf$/,
            use: ['file-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico"
        }),
        new ESLintPlugin(),
    ],
    resolve: {
        extensions: [".tsx", ".js"]
    },
    devtool: PRODUCTION ? "source-map" : "eval-source-map",
    devServer: {
        contentBase: "./dist",
        open: true
    }
}