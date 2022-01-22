module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'Sonny Hu | Github'
                return args
            })
    }
}