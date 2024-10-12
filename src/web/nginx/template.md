# 模板

## 基本结构

```nginx
...              #全局块

events {         #events块
   ...
}

http      #http块
{
    ...   #http全局块
    server        #server块
    { 
        ...       #server全局块
        location [PATTERN]   #location块
        {
            ...
        }
        location [PATTERN] 
        {
            ...
        }
    }
    server
    {
      ...
    }
    ...     #http全局块
}
```

## 代理静态页面

```nginx
server {
  listen 80;
  server_name www.example.com;

  return 301 https://$server_name$request_uri;
}

server {
  listen 443 ssl http2;
  server_name www.example.com;
  ssl_certificate /etc/nginx/certs/cert.pem;
  ssl_certificate_key /etc/nginx/certs/key.pem;
  charset utf-8;

  location / {
    root /usr/share/nginx/html;
    index index.html;
  }
}
```

## 反向代理

```nginx
server {
  listen 80;
  server_name www.example.com;

  return 301 https://$host$request_uri;
}

server {
  listen 443 ssl http2;
  server_name www.example.com;
  ssl_certificate /etc/nginx/certs/cert.pem;
  ssl_certificate_key /etc/nginx/certs/key.pem;

  location / {
    proxy_pass http://127.0.0.1:5212;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
}
```

## 重定向

### 将 HTTP 重定向到 HTTPS

```nginx
server {
  listen 80;
  listen [::]:80;
  server_name www.example.com;

  location ^~ / {
    return 301 https://$server_name$request_uri;
  }
}
```

### url 重定向

```nginx
server {
  listen 80;
  server_name example.com;

  return 301 https://www.example.com$request_uri;
}

server {
  listen 443 ssl http2;
  server_name example.com;
  ssl_certificate /etc/nginx/certs/cert.pem;
  ssl_certificate_key /etc/nginx/certs/key.pem;
  return 301 https://www.example.com$request_uri;
}
```
