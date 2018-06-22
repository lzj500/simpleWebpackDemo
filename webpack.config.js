var htmlWebpackPlugin = require('html-webpack-plugin');
var path=require('path');
module.exports = {
    entry: {
        main: './src/script/app.js'//入口文件js
    },
    output: {
        path: __dirname + '/dist',//生成文件夹的目录
        filename: 'js/[name]-bundle.js'//生成的文件名
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,//排除目录
                include: path.resolve(__dirname,'src') ,//编译的目录
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
            'vue$': 'vue/dist/vue.esm.js' //webpack安装vue的配置 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
    }
}
