var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'devBundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({ template: './src/views/index.html' }),
        new webpack.ProvidePlugin({
            'window.jQuery': 'jQuery',
            'window.$': 'jQuery',
            'jQuery': 'jQuery',
            '$': 'jQuery'
        })
    ],
    module: {
        rules: [{
                test: /\.js$/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader',
                    options: {
                        strictMath: true,
                        noIeCompat: true
                    }
                }]
            }
        ]
    }
}