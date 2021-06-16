var path = require('path')

module.exports = {
    productionSourceMap: false,
    
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },

    chainWebpack: config => {
      config.module
        .rule('js')
        .include
        .add('/packages')
        .end()
        .use('babel')
        .loader('babel-loader')
    },

    lintOnSave: false,
    devServer: {
        overlay: {
            warning: false,
            errors: false
        }
    },
}