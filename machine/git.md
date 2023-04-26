# Git

## 1. Git 安装

> 下载地址：https://git-scm.com/downloads

成功安装后，通过 `git --version` 查看版本信息。

## 2. Git 全局配置

Tips:

1. 所有的全局配置在 `~/.gitconfig` 中都可查看。
2. 安装完 Git 之后，要做的第一件事就是设置你的用户名和邮件地址。 这一点很重要，因为每一个 Git 提交都会使用这些信息，它们会写入到你的每一次提交中，不可更改。

```sh
git config --global user.name "VfanLee"                   # 用户名【必须】
git config --global user.email "fanfanfafafa@gmail.com"   # 邮箱【必须】
git config --global https.proxy https://127.0.0.1:7890    # 设置 https 代理
git config --global --unset https.proxy                   # 取消代理
```

## 3. 设置 SSH

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
