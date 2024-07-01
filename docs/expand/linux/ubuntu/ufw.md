# ufw

`ufw` 是 **Ubuntu** 默认的防火墙组件。

```sh
# 启动防火墙
ufw enable

# 关闭防火墙
ufw disable

# 查看状态
ufw status

# 开放端口
ufw allow 8388

# 拒绝端口
ufw deny 8388

# 删除规则
ufw delete allow 8388
```
