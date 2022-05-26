const loaderUtils = require('loader-utils')

module.exports = function(source, sourceMaps, AST) {
  // 获取loader配置参数
  const options = loaderUtils.getOptions(this);
  console.log('options-->', options)

  
  // 开启缓存
  this.cacheable && this.cacheable();
  // 关闭缓存
  this.cacheable(false);

  // 处理内容
  let content = source.replace(' world', ', chacha')
  this.callback(null, content, sourceMaps, AST)
  /** 异步处理 
  const callback = this.async();
  someAsyncOperation(source, function (err, result, sourceMaps, ast) {
    // 通过 callback 返回异步执行后的结果
    callback(err, result, sourceMaps, ast)
  }) **/



  return ;
}