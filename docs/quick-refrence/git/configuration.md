# Git 配置

## 查看配置

```sh
git config --global --list      # 查看所有
git config --global user.name   # 查看某个（如：用户名）
```

## 基础配置

```sh
git config --global user.name "VfanLee"                  # 用户名【必须】
git config --global user.email "fanfanfafafa@gmail.com"  # 邮箱【必须】
git config --global core.ignoreCase false                # 建议取消忽略大小写
```

## 设置代理

```sh
git config --global http.proxy http://127.0.0.1:7890     # 设置 http 代理
git config --global https.proxy https://127.0.0.1:7890   # 设置 https 代理
git config --global --unset http.proxy                   # 取消 http 代理
git config --global --unset https.proxy                  # 取消 https 代理
```

## 开启 SSH 登录

1. 生成 SSH 密钥

    ```sh
    ssh-keygen -t rsa -C GITHUB_KEY  # 紧接之后三次回车即可
    ```

    成功执行后，会生成 `~/.ssh` 文件夹，包含公钥 `id_rsa.pub`、私钥 `id_rsa` 等文件。

    ```txt
    ├── id_rsa     # 私钥
    └── id_rsa.pub # 公钥
    ```

2. 将公钥添加至 `gitHub/gitLab` 中。
