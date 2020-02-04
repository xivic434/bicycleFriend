const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './public/javascripts/index.js','./public/stylesheets/common.css'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public')
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    /* minify - seperate */
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }), new OptimizeCSSAssetsPlugin({})
    ],
    module: {
        rules: [
            /* js */
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './public/javascript')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            /* css */
            {
                test: /\.scss$/,

                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
        ],
    },
};
