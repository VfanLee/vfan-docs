# Vue3 项目架构设计

## 项目目录结构

```
├── dist                      # 编译文件
│   ├── assets
│   ├── favicon.ico
│   └── index.html
├── node_modules              # 项目依赖
├── public                    # 静态文件夹（不会编译）
│   └── favicon.ico             # 网站图标
├── src                       # 开发核心*
│   ├── assets                # 静态文件夹（会编译）
│   ├── components              # 全局组件
│   ├── router                  # vue router 路由配置文件
│   ├── styles                  # 样式管理
        ├── _base.scss            # 基础样式
        ├── _modules.scss         # 模块样式
│       └── index.scss            # 全局样式入口
│   ├── utils                   # 全局工具
│   └── views                   # 视图层
│   ├── App.vue                 # App 根组件
│   └── main.js                 # 项目入口 JS
├── README.md                 # 项目说明
├── index.html                # 项目入口 HTML
├── jsconfig.json             # JavaScript 配置文件
├── package-lock.json         # 依赖版本管理
├── package.json              # npm 配置文件
└── vite.config.js            # vite 配置文件
```

## HTML

### 元素命名

HTML 元素命名参考 `BEM` 和 `SMACSS` 命名规则。

## CSS

### 书写顺序

```md
# 位置
display
flex-direction
justify-content
align-items
grid-template-rows
grid-template-column
position
top / right / bottom / left
z-index
float
clear
overflow

# 盒子
width / height
padding
margin
border
box-sizing

# 文字
font
color
text-align
line-height  

# 视觉
visibility
background
background-clip
border-color
border-radius
transform
transition
cursor
user-select
```

## JS

### 变量命名

列表数据统一以 `List` 结尾。
