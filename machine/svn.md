# svn

教程：https://svnbucket.com/posts/svn-tutorial/

## 1. svn 安装

下载地址：https://tortoisesvn.net/downloads.zh.html

安装 TortoiseSVN，并勾选上 `command line client tools` 选项。

## 2. svn 目录管理

```txt
branches：【树枝】并行开发：定制版本、修复bug。
    + develop【开发分支】
    + bugfix【线上紧急 bug 修复分支】
    + test【测试分支】
trunk：【树干】用于主线开发。
tags：【整棵树】阶段性代码：存放 release 版本，不用于修改和 commit。
```
