# Cordova

> 参考：[Cordova 官方文档](https://cordova.apache.org/docs/en/latest/)

## 环境搭建

1. Node.js：`18.x`
2. `npm i -g cordova`，当前最新版本 12.x。
3. 各环境请参考 [Cordova 平台支持](https://cordova.apache.org/docs/en/12.x/guide/support/index.html)。

## 初始化目录结构

> 参考：
>
> - [Cordova CLI](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html)
> - [Cordova 创建项目](https://cordova.apache.org/docs/en/latest/guide/cli/index.html)
> - [Cordova 目录结构](https://cordova.apache.org/docs/en/12.x/reference/cordova-cli/index.html#directory-structure)

```
myapp/
|-- config.xml                  # Cordova 主配置文件
|-- merges/                     # 特定于平台的 web 文件
| | |-- android/
| | |-- ios/
|-- www/                        # web 源码
|-- platforms/                  # 集成平台
| |-- android/
| |-- ios/
|-- plugins/                    # Cordova 插件
  |-- cordova-plugin-camera/
```

### www

`www/index.html` 会加载 `<script src="cordova.js"></script>` 这段代码，但是你会发现 `www` 中并没有这个文件，其实 `cordova.js` 是在 Cordova 编译打包后再生成的。

### config.xml

创建项目的命令是：`cordova create HelloCordova com.example.hellocordova HelloCordova`，其对应关系如下：

- 第一个 HelloCordova：项目目录名称；
- com.example.hellocordova：`config.xml` 中 `<widget>` 标签的 `id` 属性。
- 第二个 HelloCordova：`config.xml` 中 `<widget>/<name>` 标签的值。

## 事件

> 参考：[Cordova Javascript API](https://cordova.apache.org/docs/en/12.x/cordova/events/events.html)

```js
document.addEventListener('deviceready', function () {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}, false);
```

## 插件

> 参考：
>
> - [常用插件](https://cordova.apache.org/plugins/)
> - [自定义插件](https://cordova.apache.org/docs/en/12.x/guide/hybrid/plugins/index.html)
