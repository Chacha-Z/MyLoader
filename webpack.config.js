const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: './dist',
        overlay: {
            warnings: true,
            errors: true,
        },
        open: true,
        hot: true,  // 打开热更新开关
    },
    module: {
      rules:[
        {
          test: /\.js$/,
          // use: path.resolve('./src/MyLoader/my-loader.js')
          use: [{
              loader: 'my-loader',
              options: {
                  flag: true,
              },
            },
          ]
        },
        {
            test: /\.md$/,
            use: [
                {
                    loader: 'md-loader',
                },
            ],
        },
      ]
    },
    resolveLoader: {
      modules: ['./node_modules', './src/MyLoader']
    },
}