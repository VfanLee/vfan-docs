# node.js

## nvm（node 版本管理）

```bash
nvm ls # 列出已安装的 node.js
nvm install <version_id> # 安装指定版本node
nvm use <version_id> # 使用指定版本node
nvm uninstall <version_id> # 卸载指定版本node
```

## nrm（npm 镜像管理）

```shell
nrm ls # 列出可用的源
nrm test # 测试所有源速度
nrm use <registry_name> # 切换源
```

## NPM 安装常见错误

`$..\Git\mingw64\bin\git.EXE ls-remote -h -t git://github.com/adobe-webplatform/eve.git`

```javascript
git config --global url."https://".insteadOf "git://"
```

最后设置好后，在 `~/Administrator/.gitconfig` 文件中可以进行查看。
