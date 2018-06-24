const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname),
        filename: 'isaiahkahler.js'
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/, loader: 'awesome-typescript-loader'
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader', options: { minimize: true } }],
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css']
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    }
}
