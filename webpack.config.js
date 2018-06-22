var htmlWebpackPlugin = require('html-webpack-plugin');
var path=require('path');
module.exports = {
    entry: {
        main: './src/script/app.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name]-bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname,'src') ,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template:"src/index.html"
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    }
}
