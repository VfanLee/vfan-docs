# tar

- `-c`, `--create` 创建一个新归档。
- `-x`, `--extract`, `--get` 从归档中解出文件。
- `-z`, `--gzip`, `--gunzip`, `--ungzip` 通过 gzip 过滤归档。
- `-v`, `--verbose` 详细地列出处理的文件。
- `-f` 后面紧跟归档文件的名称。

```sh
# 指定的文件或目录打包成 filename.tar.gz 文件，并自动压缩
tar -zcvf filename.tar.gz file/directory

# 将 filename.tar.gz 文件解压缩到当前目录下
tar -zxvf filename.tar.gz
```
