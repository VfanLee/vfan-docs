# URL

**统一资源定位符 (Uniform Resource Locator, URL)** 是互联网上标准资源的地址。

格式：**protocol://host\[:port]/path/\[?query]#fragment**

| **各部分** | **说明**                                                      |
| ---------- | ------------------------------------------------------------- |
| protocol   | 网络协议，常用的如http，ftp，mailto等                         |
| host       | 服务器的主机名，如 [www.example.com](http://www.example.com/) |
| port       | 端口号，可选，省略时使用协议的默认端口，如http默认端口为80    |
| path       | 路径，如“/web/index.html”                                     |
| query      | 参数，键值对的形式，通过“&”符号分隔，如“a=3\&b=4”             |
| fragment   | 锚点，如“#res”，表示页面内部的锚点                            |
