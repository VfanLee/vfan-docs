# Nginx 变量

- `$args`：包含请求 URL 中的所有参数，例如：<http://example.com/test.php?a=1&b=2> 中的 a=1&b=2。
- `$document_root`：当前请求的文档根目录，例如：/var/www/example.com。
- `$host`：请求中的主机头字段，例如：example.com。
- `$remote_addr`：客户端 IP 地址，例如：192.168.1.1。
- `$request_method`：请求方法（例如 GET、POST、PUT 等），例如：GET。
- `$request_uri`：不包括主机名的 URI，例如：/test.php?a=1&b=2。
- `$scheme`：请求的协议，例如：http 或 https。
- `$server_name`：当前请求的服务器名称，例如：example.com。
- `$server_port`：当前请求的服务器端口号，例如：80 或 443。
- `$http_user_agent`：客户端的用户代理（浏览器、应用程序等）。
- `$uri`：不包括参数的请求URI。
- `$query_string`：请求中的查询字符串。
- `$request_filename`：当前请求的文件路径。
- `$remote_user`：通过HTTP基本身份验证提供的用户名。
- `$request_body`：HTTP请求的主体部分。
- `$http_referer`：引用页面的URL。
