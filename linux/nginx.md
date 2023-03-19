# nginx

## 基本使用

nginx 配置文件路径：`/etc/nginx/nginx.conf`
重新加载配置文件：`nginx -s reload`

### 基本使用

### server_name 匹配规则

server_name 匹配规则

```conf
# 单个匹配
server_name test.example.com
# 多个匹配
server_name aaa.example.com bbb.example.com
# 通配符匹配
server_name *.example.com
# 正则匹配
~^(?<user>.+)\.example\.net$;
```

### ssl 证书配置

```conf
server {
	listen 443 ssl;
	server_name test.example.com;
	ssl_certificate /root/ssl_example.com/www/cert.crt;
	ssl_certificate_key /root/ssl_example.com/www/private.key;

	location / {
		root	/opt/app/resume;
		index	index.html;
	}
}
```

### 自动重定向

```conf
# http => https
server {
	listen 80;
	server_name ~^(?:www\.)?(.+)$;
	return 301 https://$1$request_uri;
}

# www.example.com => example.com
server {
	listen 443 ssl;
	server_name www.example.com;
	ssl_certificate /root/ssl_example.com/www/cert.crt;
	ssl_certificate_key /root/ssl_example.com/www/private.key;

	return 301 https://example.com;
}
```
