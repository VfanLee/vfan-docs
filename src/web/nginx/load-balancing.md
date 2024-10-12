# 负载均衡

假设我们有三个后端服务器：

- `backend1.example.com`
- `backend2.example.com`
- `backend3.example.com`

我们希望 Nginx 作为前端负载均衡器，将流量均匀地分发到这些后端服务器上。

## Nginx 配置

首先，打开或创建一个新的配置文件，例如 `/etc/nginx/conf.d/load_balancer.conf`。

```nginx
http {
    upstream backend_servers {
        server backend1.example.com;
        server backend2.example.com;
        server backend3.example.com;
        
        # 如果需要可以设置更多选项，例如：
        # server backend1.example.com weight=2;  # 权重配置
        # server backend2.example.com max_fails=3 fail_timeout=30s;  # 失败重试配置
    }

    server {
        listen 80;
        server_name your-domain.com;

        location / {
            proxy_pass http://backend_servers;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;

            # WebSocket 支持
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
        }
    }
}
```

重启服务。

```sh
nginx -t
nginx -s reload
```

## 配置详细说明

1. **upstream backend_servers**：
   - 定义了一个上游服务器组，包含三个后端服务器 `backend1.example.com`, `backend2.example.com`, `backend3.example.com`。Nginx 将根据默认的轮询算法将请求分发给这些服务器。

2. **server**：
   - 定义一个虚拟主机，监听 80 端口。
   - `server_name` 指定了 Nginx 处理的域名（可以替换为实际使用的域名）。

3. **location /**：
   - `proxy_pass http://backend_servers;`：将请求代理到 `backend_servers` 组。
   - `proxy_set_header Host $host;`：将原始的主机头传递给后端服务器。
   - `proxy_set_header X-Real-IP $remote_addr;`：将客户端的真实 IP 地址传递给后端服务器。
   - `proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;`：将客户端的 IP 地址添加到 X-Forwarded-For 头。
   - `proxy_set_header X-Forwarded-Proto $scheme;`：将请求的协议（http 或 https）传递给后端服务器。
   - **WebSocket 支持**：
     - `proxy_http_version 1.1;`：指定使用 HTTP/1.1 协议。
     - `proxy_set_header Upgrade $http_upgrade;` 和 `proxy_set_header Connection "upgrade";`：这些头文件允许 WebSocket 连接的升级。

## 负载均衡算法

Nginx 支持多种负载均衡算法，默认使用轮询（round-robin）。你可以通过在 `upstream` 块中添加指令来修改负载均衡策略：

- **权重（weight）**：

  ```nginx
  upstream backend_servers {
      server backend1.example.com weight=3;
      server backend2.example.com weight=1;
      server backend3.example.com weight=2;
  }
  ```

  权重越高，分配的请求越多。

- **IP哈希（ip_hash）**：

  ```nginx
  upstream backend_servers {
      ip_hash;
      server backend1.example.com;
      server backend2.example.com;
      server backend3.example.com;
  }
  ```

  每个客户端 IP 地址将始终分配给同一个后端服务器。

- **最少连接（least_conn）**：

  ```nginx
  upstream backend_servers {
      least_conn;
      server backend1.example.com;
      server backend2.example.com;
      server backend3.example.com;
  }
  ```

  请求将被分配给当前活动连接最少的服务器。
