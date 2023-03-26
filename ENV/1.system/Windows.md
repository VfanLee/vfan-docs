# Windows

## 运行命令（Win + R）

```bash
msconfig # 系统配置实用程序
services.msc # 服务
regedit # 注册表
```

## CMD 命令

```bash
echo %PROCESSOR_ARCHITECTURE% # 查询 CPU 体系结构类型
ipconfig/flushdns # 刷新 DNS 解析缓存
```

## 解除 Powershell 权限限制

> 无法加载文件 xxx，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about\_Execution\_Policies。

1. 管理员身份 打开 Powershell
2. 输入：set-executionpolicy remotesigned
3. 选择 \[全是]
