#### ```npm init -y```

-y ：yes，在init的时候省去敲回车的步骤，生成的默认的package.json

#### ```npm install webpack@4.39.2 webpack-cli@3.3.6 webpack-dev-server@3.11.0 -D```

* ```webpack-dev-server```

  创建一个服务器（http://localhost:8080），服务器监听指定目录下的文件，自动打包文件，默认将输出文件```bundle.js```存于服务器的根目录中，并具有实时更新加载页面的功能，配置如下：
  ```JS
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
      mode: 'development',
      entry: {
        index: './src/index.js',
        print: './src/print.js',
      },
      devtool: 'inline-source-map',
      //配置devServer
      devServer: {
      //指定服务器自动打包哪个文件夹下的文件
        contentBase: './dist',
      //默认publicPath:'/'，输出文件，即bundle.js文件存于服务器的根目录中，此处也可更改存储路径
        publicPath:'/'
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Development',
        }),
      ],
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
      },
    };

  ```

* ```-D```
  * ```-S``` 即 ```--save```，写入```dependencies```，发布到生产环境
  * ```-D``` 即 ```--save-dev```，写入```devDependencies```，发布到开发环境
  * ```-g``` 即 ```global``` 全局安装(命令行使用)
  * ```npm i module_name```，即本地安装(将安装包放在 ```./node_modules``` 下)


* ```webpack-cli```
  * 在```webpack 4 ```以前，不用安装```webpack-cli```即可使用。在```webpack4```版本以后，它将```webpack```和```webpack-cli```分开处理了，需要安装一个```webpack-cli```。
  * ```cli```，命令行工具。任何一个软件，想在命令行（CMD）里面去使用，必须有cli工具。
  * 实际开发中，不会传输```node_modules```文件夹，那么会缺少文件，无法运行。此时，```--save```发挥作用：将下载的模块、插件，添加进正在开发的项目的依赖中，即当前下载的插件，添加进：```package.json```的```devDependencies```中。再拿到文件时，在```package.json```所在文件夹，执行```npm install```命令，自动下载```package.json```里面的所有依赖。


#### **打包命令**

使用webpack-dev-server进行打包，实际写入package.json文件中：
```json
  "scripts": {
    "dev": "Webpack-dev-server"
  }
```

> P.S. 文件夹下没有生成对应的```bundle.js```，但程序可以正常运行。这是因为，使用```webpack-dev-server``` 时，会在内存中创建捆绑文件以进行开发，因此硬盘上没有任何内容。


> 如果要构建文件（以便它显示在驱动器上），则需要在控制台中运行 ```webpack``` 而不是 ```webpack-dev-server```。```package.json```中的示例：通过 ```npm run build``` 运行此命令

```json
"scripts": {
    "build": "webpack"
}
```