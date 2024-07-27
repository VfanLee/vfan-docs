# Git

1. [下载 Git](https://git-scm.com/downloads)
2. 全局配置

    ```sh
    # 用户名、邮箱【必须】
    git config --global user.name "VfanLee"
    git config --global user.email "fanfanfafafa@gmail.com"

    # 取消忽略大小写
    git config --global core.ignoreCase false

    # 代理
    git config --global http.proxy http://127.0.0.1:7890
    git config --global https.proxy https://127.0.0.1:7890
    # 取消代理
    git config --global --unset http.proxy
    git config --global --unset https.proxy
    ```

3. 设置完成后，查看设置：

    配置文件路径：`~/.gitconfig`

    ```sh
    git config --global --list      # 查看所有
    git config --global user.name   # 查看某个（如：用户名）
    ```

4. 设置开启 SSH 登录：

   1. 生成 SSH 密钥

        ```sh
        ssh-keygen -t rsa -C GITHUB_KEY  # 紧接之后三次回车即可
        ```

        成功执行后，会生成 `~/.ssh` 文件夹，包含公钥 `id_rsa.pub`、私钥 `id_rsa` 等文件：

        ```
        ├── id_rsa     # 私钥
        └── id_rsa.pub # 公钥
        ```

   2. 将公钥添加至 `gitHub/gitLab` 中。
