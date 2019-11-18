const debug = process.env.NODE_ENV === 'development'
const productionRootDirectory = 'web-exam'
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? `./`
        : '/', // baseUrl(3.3后弃用)：静态资源文件路径，默认值 /
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false, // lint 检验
    productionSourceMap: false, // 打包不生成 .map 文件
    configureWebpack: config => {
        if(debug){
            // 配置完后 调试窗口中源码位置的webpack://根目录下会多出一个src文件夹
            config.devtool = 'source-map'
        }else {
            config.plugins.push(new CleanWebpackPlugin())
            config.plugins.push(new CompressionPlugin({
                test: /\.js$|\.html$|\.css/, // 匹配文件名
                threshold: 10240, // 超过 10k 的文件进行压缩
                deleteOriginalAssets: false // 是否删除原文件
            }))
        }
    },
    chainWebpack(config) {
        // 取消打包后静态资源文件预加载
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
    },
    css: {
        loaderOptions: {
            sass: {
                // 配置 sass 全局变量文件，在 vue 文件中通过 $变量名使用
                // data: `@import '~@/styles/variable.scss';`
                prependData: `@import '~@/styles/variable.scss';`
            }
        }
    },
    devServer: {
        open: false, // 配置自动启动浏览器
        host: 'localhost',
        port: 3001,
        proxy: {
            '/web-exam/': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/web-exam/': '/web-exam/'
                }
            }
        },
    },
}
