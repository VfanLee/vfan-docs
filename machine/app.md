# 软件合集

## 版本控制工具

### Git

[Git 下载地址](https://git-scm.com/downloads)

安装完 Git 之后，要做的第一件事就是设置你的用户名和邮件地址。 这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改。所有的全局配置在 `~/.gitconfig` 中都可查看。

```sh
git config --global user.name "VfanLee"                   # 用户名【必须】
git config --global user.email "fanfanfafafa@gmail.com"   # 邮箱【必须】
```

Git 设置代理

```sh
git config --global https.proxy https://127.0.0.1:7890    # 设置 https 代理
git config --global --unset https.proxy                   # 取消代理
```

Git 设置 SSH 免密登录

1. 生成 SSH 密钥

    ```sh
    ssh-keygen -t rsa -C GITHUB_KEY  # 紧接之后三次回车即可
    ```

    成功执行后，会生成 `~/.ssh` 文件夹，包含公钥 `id_rsa.pub`、私钥 `id_rsa` 等文件。

    ```txt
    ├── id_rsa # 私钥
    └── id_rsa.pub # 公钥
    ```

2. 将公钥添加至 GitHub/GitLab 中。

### TortoiseSVN

[TortoiseSVN 下载地址](https://tortoisesvn.net/downloads.zh.html)

安装 TortoiseSVN 时，勾选上 `command line client tools` 选项。

## Front-End

### Visual Studio Code

[Visual Studio Code 官方](https://code.visualstudio.com/Download)

### Node.js

- [Node.js 官方](https://nodejs.org/zh-cn/download)
- [nvm - windows 版本](https://github.com/coreybutler/nvm-windows/releases)
- [nvm - Linux 版本](https://github.com/nvm-sh/nvm/releases)

## Java

### IntelliJ IDEA

[IntelliJ IDEA 官方](https://www.jetbrains.com/zh-cn/idea/download)

### JDK

[JDK 官方](https://www.oracle.com/java/technologies/downloads/)

### Tomcat

[Tomcat 官方](https://tomcat.apache.org/)

### Maven

[Maven 官方](https://maven.apache.org/download.cgi)

## Python

- [Python 官方](https://www.python.org/downloads/)

## 虚拟化技术

[VMware Workstation](https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html)

## 镜像站

- [I Tell You](https://msdn.itellyou.cn/) / [Next,I Tell You](https://next.itellyou.cn/Original/Index)
- [ubuntu](https://ubuntu.com/download/server)
- [网易镜像源](http://mirrors.163.com/)

## Windows 工具

- [微PE](https://www.wepe.com.cn/download.html)
- [图吧工具箱](http://www.tbtool.cn/)
- [Windows 激活](https://github.com/zbezj/HEU_KMS_Activator/releases)
- [Win11 右键菜单](https://www.sordum.org/14479/windows-11-classic-context-menu-v1-1/)
- [远程桌面](https://github.com/stascorp/rdpwrap)
- [网盘挂载](https://github.com/alist-org/alist)
