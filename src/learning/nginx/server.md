# server

在 Nginx 中，`server` 块用于定义一组配置，处理特定的域名或 IP 地址下的请求。虽然 `server` 块不像 `location` 块那样有丰富的匹配规则，但它也有自己的匹配机制，用来确定哪个 `server` 块来处理特定的请求。

## 匹配规则

1. **精确匹配服务器名称**：
   - Nginx 首先尝试找到一个与请求的 `Host` 头部完全匹配的 `server_name`。
   - 例如，如果 `server_name` 配置为 `www.example.com`，只有当请求中的 `Host` 头部也为 `www.example.com` 时，Nginx 才会选择这个 `server` 块。

2. **通配符匹配**：
   - 如果找不到精确匹配的服务器名称，Nginx 会尝试匹配通配符服务器名称。
   - 通配符可以放在名称的开头或结尾：
     - `*.example.com`：匹配所有以 `.example.com` 结尾的域名（如 `www.example.com`、`api.example.com`）。
     - `example.*`：匹配所有以 `example.` 开头的域名。
   - 通配符匹配规则中，前缀匹配优先于后缀匹配。

3. **正则表达式匹配**：
   - 如果前面两个步骤都没有找到合适的 `server` 块，Nginx 会检查带有正则表达式的 `server_name`。这些规则可以非常灵活，但正则表达式匹配通常较慢。
   - 正则表达式匹配的服务器名称必须用 `~` 开头。例如：
     - `server_name ~^www\d+\.example\.com$;` 匹配 `www1.example.com`、`www2.example.com` 等。

4. **默认服务器**：
   - 如果以上所有匹配规则都没有找到合适的 `server` 块，Nginx 会使用默认的 `server` 块来处理请求。
   - 默认服务器是 `listen` 指令中使用 `default_server` 参数的 `server` 块。若未明确指定，Nginx 会使用配置文件中的第一个 `server` 块作为默认服务器。

## 匹配优先级（从高到低）

1. **精确匹配**：与请求的 `Host` 头部完全匹配的 `server_name`。
2. **通配符匹配**：匹配规则中的通配符服务器名称。
3. **正则表达式匹配**：符合正则表达式的服务器名称。
4. **默认服务器**：如果没有其他匹配规则，则使用默认服务器。

## 例子

```nginx
server {
    listen 80;
    server_name www.example.com;
    # 处理 www.example.com 的请求
}

server {
    listen 80;
    server_name *.example.com;
    # 处理其他子域名如 api.example.com 的请求
}

server {
    listen 80;
    server_name example.com;
    # 处理 example.com 的请求
}

server {
    listen 80 default_server;
    server_name _;
    # 处理所有未匹配到的请求
}
```

在这个例子中：

- `www.example.com` 精确匹配第一个 `server` 块。
- `api.example.com` 匹配第二个带通配符的 `server` 块。
- `example.com` 精确匹配第三个 `server` 块。
- 其他未匹配的请求将由最后的默认 `server` 块处理。
