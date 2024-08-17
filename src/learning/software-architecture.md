# 软件架构

软件的架构模式：单机架构 => 集中式架构 => 分布式微服务架构

## 传统三层架构

- UL（UI Layer） 表现层：表示用户的界面
- BLL（Business Logic Layer）业务逻辑层：处理核心业务以及数据封装
- DAL（Data Access Layer）数据访问层：表示数据访问

## MVC

- 模型 Model：MVC 架构的核心，表示 数据模型 和 业务模型，即一组数据的类和管理该数据的逻辑信息
- 视图 View：显示逻辑，用于显示 Controller 提供的模型数据
- 控制器 Controller：处理 Http 请求，调用模型，通过调用视图来呈现模型

::: warning
三层架构不等于 MVC！
:::

## MVVM

- Model：核心业务
- View：视图
- View Model：View Model 之间的连接器，如：Vue 实例……

## 领域驱动模型

- User Interface：面向客户端
- Application：应用层
- Domain：领域层
- Infrastructure：基础设施层
