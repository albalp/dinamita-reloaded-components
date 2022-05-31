
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path =require('path'); //Método de node para resolver la ruta absoluta
module.exports = {
    entry: './src/index.js', 
    output: {
        path: path.resolve(__dirname, 'build') //Este output es porque queremos que la carpeta por default de salida que tiene el nombre de dist se cambie al que aquí especifiqumos usando métodos de node
    },
    resolve: {
      extensions: [".js", ".jsx"],
  },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-react',
                            {
                                runtime: 'automatic' // This is the configuration that allows you not to import React from 'react' It's a good practice
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [ //This is an array, because we can have multiple plugins
        new HtmlWebpackPlugin({template: 'public/index.html'})
    ]
        
}