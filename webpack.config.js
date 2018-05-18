const path = require('path');
const distDir = path.resolve(__dirname, 'dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js',
    ],
    output: {
        path: distDir,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                test: /\.js$/,
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: ["absolute/path/a", "absolute/path/b"]
                        }
                    }
                ]
            },
        ],
    },
    devServer: {
        contentBase: distDir
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'static/index.html'
        })
    ]
};