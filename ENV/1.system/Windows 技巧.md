---
title: Windows 技巧
url: https://www.yuque.com/doublefan-tdo7d/agr25e/duw67b
---

<a name="p1aHg"></a>

# 运行命令（Win + R）

`msconfig`：系统配置实用程序
`services.msc`：服务
`regedit`：注册表 <a name="ZW2Yk"></a>

# 存储优化

1. 开启“存储感知”。
2. 修改用户目录（视频、图片、文档、下载、音乐……）默认的位置路径。 <a name="S2VwL"></a>

# 解除 Powershell 权限限制

> 无法加载文件 xxx，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about\_Execution\_Policies。

1. 管理员身份 打开 Powershell
2. 输入：set-executionpolicy remotesigned
3. 选择 \[全是] <a name="ZBnbN"></a>

# 刷新 DNS 解析缓存

1. 打开 CMD
2. 输入`ipconfig/flushdns` <a name="G6RKV"></a>

# Windows 11 家庭版开启远程连接

> 由于 Windows 11 家庭版不支持 Remote Desktop Connection，需要借助第三方工具

1. 下载：<https://github.com/stascorp/rdpwrap/releases/tag/v1.6.2>

> 解压目录如下：
> ![image.png](..\\..\assets\duw67b\1658499151781-2f553bf9-896f-4006-8b4b-8c59498a49a3.png)

2. 管理员身份运行 `install.bat`

> 默认安装路径：
> ![image.png](..\\..\assets\duw67b\1658499366942-9f3d27de-4e59-42cf-92c0-1509ca697963.png)

3. 管理员身份运行`RDPCong`，查看配置状态

![image.png](..\\..\assets\duw67b\1658499758354-1b37673a-a87b-49b9-9911-63458a65bedd.png)
**接下来会遇到的异常状态：**

1. `Listener state`未正常监听

- 防火墙配置“入站规则”

![image.png](..\\..\assets\duw67b\1658499490569-3f9a8570-c0d8-49cc-9a06-6031a0781086.png)
![image.png](..\\..\assets\duw67b\1658499528491-9882c7e4-da68-47e1-ba0e-a1a7131db16d.png)
![image.png](..\\..\assets\duw67b\1658499575980-afb36f28-78da-404e-bca9-1fb7c3b7775f.png)![image.png](..\\..\assets\duw67b\1658499585979-cb98e625-197e-4491-93a8-dee892272216.png)
![image.png](..\\..\assets\duw67b\1658499596427-5a42ddc8-fb4c-4d0b-9b61-8ab3da13dc2e.png)
![image.png](..\\..\assets\duw67b\1658499609233-c3717ff2-446a-466b-9a14-51854e6290a3.png)

- 修改安装文件`rdpwrap.ini`，参考这个网址：<https://github.com/stascorp/rdpwrap/issues>

2. `Service state`未正常开启

![image.png](..\\..\assets\duw67b\1658499878155-9b73a2d3-c7ba-4bce-83f2-a079f5b5054b.png)
