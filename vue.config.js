module.exports = {
  publicPath: '/', // 根路径
  outputDir: 'dist', // 构建输出目录 npm run build
  assetsDir: 'assets', // 静态资源目录(js,css,img,fonts)
  lintOnSave: false, // 是否开启eslint保存检测，有效值: true || false || 'error'
  devServer: {
    open: true, // 使用npm run serve 之后是否自动在游览器中打开项目
    port: 8002, // 端口号
    https: false, // true启动游览器会给出一些警告
    hotOnly: false, // 热更新 webpack已经有
    disableHostCheck: true,
  }
}
