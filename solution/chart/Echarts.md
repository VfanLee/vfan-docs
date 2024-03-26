# Echarts

Echarts 是一个基于 Javascript 的开源可视化图表库，简单理解就是专门用来进行数据展示的一个库。

## 基本图表使用场景

1. 柱状图：呈现每一种分类的数据。
2. 折线图：数据随事件变化趋势。
3. 散点图：推断出不同维度数据之间的相关性。
4. 饼图：不同分类的占比情况。
5. 地图：不同地理位置上的数据差异。
6. 雷达图：分析多个维度的数据与标准数据的对比情况。
7. 仪表盘：某个指标的进度情况。

## 配置项介绍

- [Echarts 详细配置项](https://echarts.apache.org/zh/option.html)。
- [Echarts 常见图表配置](https://github.com/VfanLee/code-notes/echarts-demo)。
- [Echarts 官方图表示例](https://echarts.apache.org/examples/zh/index.html)

## Echarts 显示相关

### Echarts 主题配置

`echarts.init(dom, themeName)`有两个参数：

- 参数一：echarts 容器DOM
- 参数二：echarts 主题名称

所以在引入主题只需要在 init() 时，定义对应主题名称即可。

#### 内置主题

echarts 内置两套主题：light、dark。无需额外的文件引入。

#### 自定义主题

echarts 官方有提供多种主题，下载即可：[https://echarts.apache.org/zh/download-theme.html](https://echarts.apache.org/zh/download-theme.html)
还有一种方式就是完全定义，多种配置项均可自定义：[https://echarts.apache.org/zh/theme-builder.html](https://echarts.apache.org/zh/theme-builder.html)
下载好自定义主题后，需要在引入 echarts.js 之后再引入 echarts-theme.js 主题文件，并且在 init() 方法中再进行定义主题名称，而主题名称需要在主题文件来判断，![image.png](https://cdn.nlark.com/yuque/0/2022/png/12641056/1666430280024-26edc9ca-98ed-4752-95b1-19add731804b.png#clientId=u9d0f9484-9516-4&from=paste&height=216&id=u7b94dac2&originHeight=432&originWidth=763&originalType=binary&ratio=1&rotation=0&showTitle=false&size=56259&status=done&style=none&taskId=ue5fb5f52-1428-4afe-97b7-f8ae6facb7b&title=&width=381.5)。

### Echarts 调色盘

调色板是一组颜色、图形、系列，echarts会自动选择其颜色。

1. 主题调色盘

    在主题文件中，会定义好调色盘 ![image.png](https://cdn.nlark.com/yuque/0/2022/png/12641056/1666430452847-1819a2ff-b534-46a5-9ea1-bb3265a41e3d.png#clientId=u9d0f9484-9516-4&from=paste&height=255&id=u7857d08e&originHeight=509&originWidth=889&originalType=binary&ratio=1&rotation=0&showTitle=false&size=69274&status=done&style=none&taskId=u2ef1a8f6-d927-4356-a919-42947ac3a78&title=&width=444.5)。

2. 全局调色盘：在 option.color 中配置即可
3. 局部调色盘：在 option.series.color 中配置即可

颜色权重遵循“就近原则”：局部 > 全局 > 主题。

### 样式

1. 直接样式：itemStyle、textStyle、lineStyle、areaStyle、label
2. 高亮样式：emphasis 中包裹 itemStyle、textStyle、lineStyle、areaStyle、label

这些样式优先级很高，会覆盖主题、调色盘的效果。

### 图表自适应

1. 监听窗口大小变化事件。
2. 在事件处理函数中调用 Echarts 实例对象的 resize() 方法。

## Echarts 动画的使用

### 加载动画

myCharts.showLoading()：显示加载动画
myCharts.hideLoading()：隐藏加载动画

### 增量动画

myCharts.setOption()

### 动画的配置

- animation
- animationDuration
- animationEasing
- animationThreshold
- ...

## Echarts 全局对象

### 全局 echarts 对象

全局 echarts 对象在引入 echarts.js 文件后就可以直接使用了。

常见方法：

- init()：注册 echarts 实例对象
- registerTheme()：注册主题
- registerMap()：注册地图
- connect()：将多个图表进行关联
- ...

### echartsInstance 对象

echartsInstance 对象是 echarts.init() 方法调用后得到的。

常见方法：

- setOption()：配置项设置
- resize()：重置计算和绘制图表
- on()/off()：绑定/解绑事件处理函数
- dispatchAction()：触发某些行为，使用代码模拟用户行为
- clear()：清空当前实例，移除实例中所有组件和图表
- dispose()：销毁实例
