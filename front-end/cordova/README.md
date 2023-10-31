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

创建项目的命令是：`cordova create hello-cordova com.example.hellocordova HelloCordova`，其对应关系如下：

- `hello-cordova`：项目目录名称；
- `com.example.hellocordova`：`config.xml` 中 `<widget>` 标签的 `id` 属性；
- `HelloCordova`：`config.xml` 中 `<widget>/<name>` 标签的值。

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

## Cordova 集成 Vue3 开发

1. 创建一个 cordova 模板项目（以下称为 A）；
2. 创建一个 vue3 项目（以下称为 B）；
3. 将 A 中 `config.xml` 复制到 B 的根目录下，内容自行调整；
4. 在 B 的 `index.html` 中引入 cordova 文件（文件不存在没关系，Cordova 打包成后会自动生成）；

    ```html
    <script src="cordova.js"></script>
    ```

5. 修改 B 的打包的项目名为 `www`，然后打包编译；

    ```js
    // vite 为例
    base: '/',
    build: {
      outDir: 'www'
    },
    ```

6. 当 B 的文件结构和 A 一样时，再通过命令行执行 `cordova platform add android` 来添加平台，若目录结构出错，Cordova 会无法识别：`Current working directory is not a Cordova-based project.`

7. 命令行执行 `cordova run android` 来打包 vue3 + Cordova 的集成项目。

### 实时调试

1. 本地运行 vue 项目，启动一个服务：`http://192.168.1.88:5173`；
2. 将 `config.xml` 中的 `<content src="index.html" />` 更改为 `<content src="http://192.168.1.88:5173/" />`

    ```xml
    <!-- dev -->
    <content src="http://192.168.1.88:5173/" />
    <!-- prod -->
    <!-- <content src="index.html" /> -->
    ```

3. Cordova 重新打包应用。
