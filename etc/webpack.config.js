module.exports = {
    entry: './src/index.js',
    output: {
        path: '../presidium/assets/shared/js/',
        filename: 'presidium.js'
    },
    module: {
        loaders: [
            { exclude: /node_modules/, loader: 'babel', query: { presets: ['react', 'es2015'] }},
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
            { test: /\.gif$/, loader: "url-loader?mimetype=image/png" },
            { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.less']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
