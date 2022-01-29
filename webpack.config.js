const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: {
            path: require.resolve('path-browserify'),
            util: require.resolve("util/"),
            fs: false
        }
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        globalObject: "this",
        library: 'brackets-viewer',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
};
