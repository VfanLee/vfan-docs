# Nginx 命令

```sh
nginx -s stop       # 快速关闭 Nginx，可能不保存相关信息，并迅速终止 web 服务。
nginx -s quit       # 平稳关闭 Nginx，保存相关信息，有安排的结束 web 服务。
nginx -s reload     # 因改变了 Nginx 相关配置，需要重新加载配置而重载。
nginx -s reopen     # 重新打开日志文件。
nginx -c filename   # 为 Nginx 指定一个配置文件，来代替缺省的。
nginx -t            # 不运行，仅仅测试配置文件。Nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件。
nginx -v            # 显示 Nginx 的版本。
nginx -V            # 显示 Nginx 的版本，编译器版本和配置参数。
```
