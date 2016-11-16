const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './main.js',
    output: {
        publicPath: '/',
        filename: 'bundle.js'
    },
    resolveLoader: {
        root: path.resolve(__dirname, 'node_modules')
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel'
            }
        ]
    }
}