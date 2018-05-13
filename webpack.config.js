const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    externals: {
        d3: 'd3'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000
    }
};
