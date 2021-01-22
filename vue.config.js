module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/ZtaoUI/' : '/',
    // 创建一个具名规则，以后用来修改规则
    // chainWebpack: config => {
    //     config.module
    //         .rule('scss')
    //             .use('postcss-loader')
    //                 .loader('postcss-loader')
    // }
    
}