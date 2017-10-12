module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + "/src/main/resources/static/app.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/src/main/resources/static",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./src/main/resources/static",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,
        watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/,
            aggregateTimeout: 100,
            poll: 1000
        },
        proxy: {
            "/api": "http://localhost:8100"
        }
    }
}