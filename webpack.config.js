const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
    filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[ext]', // Ruta de salida para las imágenes
                },
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            ],
            
        },
};