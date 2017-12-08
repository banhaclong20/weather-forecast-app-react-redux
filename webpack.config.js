const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/App.js',
    output: {
        path: path.resolve(__dirname),
        filename: './dist/app.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        stats: 'errors-only',
        open: true,
    },
    plugins: [
        new ExtractTextPlugin({
            allChunks: true,
            filename: './dist/styles.css',
        }),
    ],
};