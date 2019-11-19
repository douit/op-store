# op-store
基于 op 开发开放平台的 应用中心系统

## 安装 jQuery
```cmd
npm install jquery --save
```

webpack.config.js

```javascript
const webapck = require("webpack")
module.exports = {
    configureWebpack: config => {
        config.plugins.push(new webpack.ProvidePlugin({
            $: 'jquery'
        }))
    }
}
```
